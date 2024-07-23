import React, { useState } from "react";
import "./timeline.scss";
import { SearchBar, TimeGrid, EmptyGrid } from "../../../components/components";
import { itemList } from '../../../config/data';

//*reference below
//*https://github.com/codefreeeze/react-beginner-blog/tree/master*/

const Timeline = () =>
{
    const [items, setItems] = useState(itemList);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) =>
        {
            e.preventDefault();
            handleSearchResults();
        };
    
        const handleSearchResults = () =>
        {
            const allItems = itemList;
            const filteredItems = allItems.filter((item) => item.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
            setItems(filteredItems);
        }
    
        const handleClearSearch = () =>
        {
            setItems(itemList);
            setSearchKey('');
        }
    

    return(
        <div className="timeline-page">
            <SearchBar 
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            { !items.length ? <EmptyGrid /> : <TimeGrid items={items} /> }
        </div>
    );
};

export default Timeline;