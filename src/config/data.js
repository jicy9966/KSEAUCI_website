import item1 from "../assets/images/item1.png"
import item2 from "../assets/images/item2.png"
import item3 from "../assets/images/item3.png"
import item4 from "../assets/images/item4.png"
import item5 from "../assets/images/item5.png"
import item6 from "../assets/images/item6.png"
import item7 from "../assets/images/item7.png"
import item8 from "../assets/images/item8.png"

//새로운 계시글 가이드라인
//id = 가장 최근 + 1
//title, date, description is self-explanitory
//category는 search bar에서 나오는 검색 단어들
//cover는 이벤트 이미지 (^맨위 import들 그대로 써요)

export const itemList = 
[
    {
        id: 8,
        title: "Study Night & After Social",
        date: "May 30, 2024",
        category: "study night, social, spring, 2024",
        subCategory: ["#social", "#study", "#prep_for_finals"],
        description:
            "5월 30일 목요일에 파이널과 학기 마무리를 준비하는 재학생분들을 위한 \nStudy Night이 있었습니다 💻" + 
            "UCI 대표 한인 아카데믹 동아리인 만큼 다들 집중해서 \n열심히 공부하는 시간을 가지며, " + 
            "공부 후에는 Cane's 에서 야식을 먹으며 서로 친해지는 시간도 가졌는데요🍗 " +
            "다시 만난 분들, 새로 오신 분들 모두 즐거운 시간을 보냈습니다 🤗 학기 마무리 잘 하시고, 내년에도 UCI KSEA 많이 기대해 주세요 :)",
        cover: item8, 
    },

    {
        id: 7,
        title: "원윤진 교수님 Lab Tour",
        date: "May 6, 2024",
        category: "lab tour, mechanical, aerospace, engineering, 원윤진 교수님, 2024",
        subCategory: ["#lab", "#mechanical", "#aerospace", "#engineering"],
        description:
            "🔬 저희 학교 UCI에서 Mechanical & Aerospace Engineering을 가르치시는 원윤진 \n교수님의 실험실을 탐방해 보는 시간을 가졌는데요! 🔍✨ " +
            "🌐 이번 Lab 투어에선 \n대학원생 장성현님과 조교 서영준님이 안내해 주신 물질의 상변화를 활용하고 AI와 \n" +
            "머신러닝을 적극적으로 도입하는 혁신적인 냉각 시스템 개발에 대해 배우는 유익한 \n시간을 가졌습니다. " + 
            "📚 앞으로 다가오는 차기 랩투어 일정에 참여하고 싶으시다면 \n저희 UCI KSEA 인스타그램의 추후 업데이트를 확인해주세요! 🤍💙",
        cover: item7, 
    },

    {
        id: 6,
        title: "Spring 2024 General Meeting & Bonfire",
        date: "May 5, 2024",
        category: "general meeting, gm, bonfire, spring, 2024",
        subCategory: ["#general_meeting", "#GM", "#bonfire", "#recap"],
        description:
            "안녕하세요 UCI KSEA 입니다!💙 \n" + 
            "저번주 금요일 (5/3)에 열린 Spring Quarter 첫 GM에서는 KSEA에 대한 소개와 \n" +
            "지금까지의 활동을 공유드리고, 내년에는 어떤 이벤트들이 기획되어 있는지 \n설명해드리는" +
            "시간을 가졌습니다. 🥰 그리고 내년을 이끌어 갈 새로운 임원들의 소개와, 임원진과 재학생들이 함께 신상 빙고, " +
            "Kahoot 등의 액티비티를 하며 서로 친해지는 \n시간을 가졌습니다! 😎 " + 
            "GM 후 친목 도모를 위해 Huntington Beach에서 S'mores를 \n맛있게 먹고 Bonfire도 같이 즐겼습니다. " +
            "서로의 목표와 고충들을 들으며 더욱 더 \n친해질 수 있는 시간이 되었습니다!🔥" + 
            "앞으로도 더 많은 이벤트들이 준비되어 있으니 \n많은 참여 부탁드립니다~🙇",
        cover: item6, 
    },

    {
        id: 5,
        title: "South-Western Regional Conference",
        date: "February 24, 2024",
        category: "conference, swrc, south-western regional, 2024",
        subCategory: ["#SWRC", "#HQ", "#recap", "#YG"],
        description:
            "안녕하세요! UCI KSEA입니다 🤍💙\n" +
            "최근 KSEA HQ에서 UCI KSEA를 포함한 남가주의 여러 KSEA 소속 대학을 모아 \nCSULB에서 열린 31번째 SWRC 모임을 주최했는데요! " +
            "이번 SWRC에서는 KSEA \n회원들과 임원진들을 위한 리더십 워크샵과 여러 전문 강사님들 및 교수님들의 유익한 강연을 들을 수 있는 소중한 시간을 보냈습니다!! " +
            "SWRC가 끝난 후에는 다른 학교들의 KSEA 회원들과 친해지며 서로에 대해 더 많이 알아가는 네트워킹 시간도 가졌는데요 😎🤠" +
            "이번 SWRC에 참여해주신 회원 여러분과 강사님들께 진심으로 감사드리며, \n앞으로의 소셜 이벤트와 워크샵에 많은 관심과 참여 부탁드립니다!",
        cover: item5,
    },

    {
        id: 4,
        title: "권혁준 교수님과 Q&A",
        date: "February 2, 2024",
        category: "q&a, eecs, engineering, 권혁준 교수님, 2024",
        subCategory: ["#Q&A", "#recap", "#EECS", "#engineering"],
        description: 
            "안녕하세요 UCI KSEA 입니다 💙\n" + 
            "얼마전 저희 KSEA에서 현직 UCI EECS 학과 권혁준 교수님과의 Q&A를 \n진행했었는데요! " +
            "학과에 대한 설명과 대학생활, 진로 등등에 대한 모든 궁금증을 \n해소할수 있는 시간을 보냈습니다💻🤩 " +
            "포스트에 KSEA가 PICK한 질문들과 답변들도 있으니 가볍게 넘기면서 많이 봐주세요 ☺️",
        cover: item4,
    },

    {
        id: 3,
        title: "KSEA 신입생 환영회",
        date: "October 13, 2023",
        category: "general meeting, social, gm, 2023",
        subCategory: ["#general_meeting", "#social", "#GM"],
        description:
            "안녕하세요 UCI KSEA입니다 :) \n" + 
            "저번주 금요일 (10/13)에 열린 KSEA 1st GM에서 재학생 여러분들과 만나 KSEA의 \n목적과 앞으로 열릴 이벤트들, " +
            "그리고 일년동안 KSEA를 이끌어줄 임원진들에 대해 \n간략하게 소개하는 시간을 가졌습니다! " + 
            "GM이 끝난 후에는 다같이 보바와 핫팟을 \n먹으며 서로 더 알아가고 친해질 수 있는 소중한 시간이었습니다 😋🧋🍲 " + 
            "그 날 \n와주신 모든 학생 여러분께 다시 한번 감사드리며, 일년동안 좋은 추억과 경험을\n 쌓을 수 있도록 최선을 다하겠습니다 😉",
        cover: item3, 
    },

    {
        id: 2,
        title: "Study Night",
        date: "June 6, 2023",
        category: "study night, 2023",
        subCategory: ["#study_night", "#finals_week"],
        description: 
            "파이널 전 멤버들끼리 Plaza Verde Study Room에 모여서 다 같이 열공타임!!\n " +
            "여럿이 모여 공부하니까 더 파이팅 되고, 누가 STEM 동아리 아니랄까봐 \n집중 폼 미쳤따,," +
            "공부 타임이 끝난 후, 같이 소소하게(?) 엽떡도 먹었습니다 😋 \n" +
            "앞으로도 우리 자주 자주 만나요오 (질척) 🤗💙",
        cover: item2,
    },

    {
        id: 1,
        title: "Bonfire Beach",
        date: "May 23, 2023",
        category: "social, bonfire, beach, 2023",
        subCategory: ["#bonfire", "#huntington_beach", "#bbq"],
        description: 
            "다들 여름 방학 잘 보내고 계신가요? \n" +  
            "저번 봄 쿼터가 끝나기 전에 멤버들끼리 다녀온 BONFIRE NIGHT의 순간들을 사진에 \n담아봤습니다 📸🩵 " +
            "Huntington beach에서 고기와 마쉬멜로우는 물론, 다 같이 \n게임도 하며 서로 더 가까워질 수 있는 시간이었습니다 🤗🙌🏻 " + 
            "다가오는 2023년 \n가을학기를 위해 아카데믹한 활동 뿐만 아니라" +
            "여러가지 소셜 이벤트도 KSEA \n임원진들이 열심히 준비하고 있으니 많은 기대 부탁드리고, 늘 저희 인스타의 게시글을 예의주시 해주세요 😋 " +
            "저희는 곧 다른 재밌는 소식들로 찾아뵙겠습니다. \n" + 
            "감사합니다 🫥💙",
        cover: item1,
    },  
];