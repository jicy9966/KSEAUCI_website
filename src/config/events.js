//upcoming events

export const eventList = 
[
    {
        id: 1, //this is a template for reference, copy items below this index
        date: "", //for the date, any day before the 10th must be preceded by a 0 (ex. 01, 02)
        events: 
        [
            {
                title: "The title of the event", 
                description: "The decsription of the event",
                time: null,     //<- string object
                location: null, //<- string object
                linkRSVP: null, //<- string object, RSVP link
                linkInfo: null, //<- string object, link to instagram post or more info
                //for any information that is not prepared or will not be provided, simply write null
            },
        ]
    },
    {
        id: 15,
        date: "Jul 29 Mon",
        events: 
        [
            {
                title: "Board Members Zoom Meeting", 
                description: "얼바인 시간으로 7월 29일 월요일 오후 5시-6시, "+
                             "한국 시간으로 7월 30일 화요일 오전 9시-10시에 진행될 예정입니다.",
                time: "5 PM ~ 6 PM",
                location: "Online (via Zoom)",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 14,
        date: "Feb 17 Mon",
        events: 
        [
            {
                title: "UCI Spring 2025 Quarter Enrollment Window Opens", 
                description: "Enrollment by window for continuing students: Feb 24th - Mar 12th.",
                time: null,
                location: null,
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 13,
        date: "Nov 11 Mon",
        events: 
        [
            {
                title: "UCI Winter 2024 Quarter Enrollment Window Opens", 
                description: "Enrollment by window for continuing students: Nov 18th - Dec 6th.",
                time: null,
                location: null,
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 12,
        date: "Dec 13 Fri",
        events: 
        [
            {
                title: "UCI Fall 2024 Quarter Ends", 
                description: "UCI Fall 2024 Quarter Ends.\n First day of finals week is on Dec 7th, Saturday.",
                time: null,
                location: null,
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 11,
        date: "Sep 23 Mon",
        events: 
        [
            {
                title: "UCI Fall 2024 Quarter Begins", 
                description: "UCI Fall 2024 Quarter Begins.\n First day of class is on Sep 26th, Thusrday.",
                time: null,
                location: null,
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 10,
        date: "Jul 15 Mon",
        events: 
        [
            {
                title: "Board Members Zoom Meeting", 
                description: "가을 학기 이벤트 브레인스토밍 (Brainstorming)을 위한 미팅."
                           + "\n 줌 미팅 링크는 임원진 단톡방 확인.",
                time: "5 PM ~ 6 PM",
                location: "Online",
                linkRSVP: "null",
                linkInfo: "null",
            },
        ]
    },
    {
        id: 9,
        date: "May 30 Thu",
        events: 
        [
            {
                title: "Study Night & After Social", 
                description: "다가오는 시험들을 위해 저희 KSEA 가 다가오는 목요일 (5/30)에 \n2024 Spring Quarter " +
                             "마지막 이벤트인 Study Night & After Social 을 \n준비했습니다!! " + 
                             "더 자세한 내용은 인스타그램 참고해주세요!",
                time: "7 PM ~ 10 PM",
                location: "Plaza Verde 1 Study Room",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 8,
        date: "May 03 Fri",
        events: 
        [
            {
                title: "SPRING 2024 UCI KSEA GM + BONFIRE SOCIAL", 
                description: "2024 Spring Quarter 저희 KSEA 가 이번학기 첫 General Meeting을 진행하게 \n되었습니다!😊 " +
                             "앞으로 KSEA 에서 있을 여러가지 이벤트들에 관한 설명들과 학업관련 유용한 정보들을 전할 예정이니" +
                             " \n많은 관심과 참여 부탁드립니다🙌🏻🙌🏻" + 
                             "또 이벤트 후에는 Huntington beach 에서 bonfire & s'mores 를 통해 서로 더\n 어울리고 친해질수 있는" +
                             " 뒷풀이 자리도 준비되어 있으니 놓치지 마세요!!🪵🍫",
                time: "5 PM",
                location: "VDCN Conference Room",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 7,
        date: "Apr 12 Fri",
        events: 
        [
            {
                title: "Staff MT @ San Diego", 
                description: "Board Members Staff MT (Membership Training)!",
                time: "12일 저녁부터 13일 아침까디",
                location: "San Diego",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 6,
        date: "Feb 02 Fri",
        events: 
        [
            {
                title: "권혁준 교수님과의 EECS의 대한 모든 것!", 
                description: "EECS 교수 권혁준 교수님과 진행하는 Q&A Session, 그리고 같이 제공되는 Coffee & Snacks Time!",
                time: null,
                location: "ISEB 1300",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 5,
        date: "Oct 13 Fri",
        events: 
        [
            {
                title: "2023-2024 KSEA UCI First GM", 
                description: "",
                time: null,
                location: "VDCN Conference Room",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 4,
        date: "Jun 06 Tue",
        events: 
        [
            {
                title: "Study Night", 
                description: "Finals week 전에 다 같이 모여서 \n공부하는 스터디 나이트! 모인김에 \n저녁으로 떡볶이도 먹고!",
                time: null,
                location: "Plaza Verde 2 Study Rooms",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 3,
        date: "May 23 Tue",
        events: 
        [
            {
                title: "Bonfire @ Huntington Beach", 
                description: "Huntington Beach에 가서 고기도 \n구워먹고, bonfire도 즐겨요.",
                time: null,
                location: "Huntington Beach",
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
    {
        id: 2,
        date: "Apr 10 Mon",
        events: 
        [
            {
                title: "Our Beginning", 
                description: "The day KSEA UCI was found (again).",
                time: null,
                location: null,
                linkRSVP: null,
                linkInfo: null,
            },
        ]
    },
];