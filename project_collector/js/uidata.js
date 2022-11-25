const ScnData = {textName: "Главная страница", scnLinkName: "main_page"};
const TopBarButtons = [
  {id: 0, strName: "О проекте", subScnName: "about", scnPrefix: "topBar"},
  {id: 1, strName: "Помощь", subScnName: "helper", scnPrefix: "topBar"}
];
const UiData = {
  navigat: {
    main: [
      {id: 0, textName: "Главная страница", scnLinkName: "main_page", topBarId: [0, 1,]},
      {id: 1, textName: "История", scnLinkName: "story_page", topBarId: [0, 1,]},
      {id: 2, textName: "«Wiki-Book»", scnLinkName: "wikibook", topBarId: [0, 1,]},
      {id: 3, textName: "Все статьи", scnLinkName: "all_content", topBarId: [0, 1,]},
      {id: 4, textName: "«Разбор полетов»", scnLinkName: "my_games", topBarId: [0, 1,]},
    ],
    links: [
      {id: 0, textName: "ВК", linkStr: "https://vk.com/public185014859"},
    ],
  },
};
