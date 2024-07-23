import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ActivityPage, ItemView, EventsPage, MembersPage } from './pages/index';
import ScrollToTop from "./components/ScrollToTop";

function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path='/activity/:id' element={<ItemView />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/members' element={<MembersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
