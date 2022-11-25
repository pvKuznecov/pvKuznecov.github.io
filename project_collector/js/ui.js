$(document).ready(function(){
  "use strict";

  const WorkSpace = {
    scnLinkName: "",
    textName: "",
  };
  const MainNavigator = addNavigat();
  const MainFooter = document.getElementById('mainFooter');
  const TopBar = document.getElementById('mainHeader');
  const MainWindowObj = {
    main_page: function() {
      console.log("mainWindow_generator: main_page");
      let target = document.getElementById('mainWindow');
      let subWind_main = new AddElem.div("subWind", "subWind_main_page");
      let titleH2Text = document.createElement('h2');
      titleH2Text.textContent = "Главная страница";
      subWind_main.appendChild(titleH2Text);
      target.appendChild(subWind_main);
      return;
    },
    story_page: function() {
      console.log("mainWindow_generator: story_page");
      let target = document.getElementById('mainWindow');
      let subWind_storyPage = new AddElem.div("subWind", "subWind_story_page");
      let titleH2Text = new AddElem.h2();
      titleH2Text.textContent = "История";

      let mainText = new AddElem.p();
      mainText.textContent = "Текст, который должен быть здесь. Просто потому..."

      target.appendChild(titleH2Text);
      target.appendChild(mainText);
      target.appendChild(subWind_storyPage);
      let vkPosts = ContentData.vk.posts;
      for (var i = 0; i < vkPosts.length; i++) {
        makeContentCube("subWind_story_page", vkPosts[i].vk_article, vkPosts[i].uName);
      };
    },
    wikibook: function() {
      console.log("mainWindow_generator: wikibook");
      let target = document.getElementById('mainWindow');
      let subWind_wiki = new AddElem.div("subWind", "subWind_wikibook");
      let titleH2Text = document.createElement('h2');
      titleH2Text.textContent = "«Wiki-Book»";
      subWind_wiki.appendChild(titleH2Text);
      target.appendChild(subWind_wiki);
    },
    all_content: function() {
      console.log("mainWindow_generator: all_content");
      let target = document.getElementById('mainWindow');
      let subWind_allContent = new AddElem.div("subWind", "subWind_all_content");
      let titleH2Text = document.createElement('h2');
      titleH2Text.textContent = "Все статьи";
      subWind_allContent.appendChild(titleH2Text);
      target.appendChild(subWind_allContent);
    },
    my_games: function() {
      console.log("mainWindow_generator: my_games");
      let target = document.getElementById('mainWindow');
      let subWind_myGames = new AddElem.div("subWind", "subWind_my_games");
      let titleH2Text = document.createElement('h2');
      titleH2Text.textContent = "«Разбор полетов»";
      subWind_myGames.appendChild(titleH2Text);
      target.appendChild(subWind_myGames);
    },
  };

  let AddElem = {
    p: function() {
      let res = document.createElement('p');
      return res;
    },
    h2: function() {
      let res = document.createElement('h2');
      return res;
    },
    div: function(className, idVal) {
      let result = document.createElement('div');
      if (typeof className == "string") {
        result.className = className;
      };
      if (typeof idVal == "string") {
        result.id = idVal;
      };
      return result;
    }
  };

  // первый запуск
  function getStart() {
    // наполняем начальными данными рабочее пространство
    WorkSpace.scnLinkName = ScnData.scnLinkName;
    WorkSpace.textName = ScnData.textName;

    let mScnDataList = UiData.navigat.main;
    // получаем список id`шников кнопок вернего бара (согласно текущему scn)
    let topBarIdList = [];
    for (var i = 0; i < mScnDataList.length; i++) {
      if (mScnDataList[i].scnLinkName == WorkSpace.scnLinkName) {
        topBarIdList = mScnDataList[i].topBarId;
        break;
      };
    };
    // наполняем вехний бар кнопками
    for (var i = 0; i < topBarIdList.length; i++) {
      if (document.getElementById("topBar_" + topBarIdList[i]) == null) {
        let butText = "";
        for (var j = 0; j < TopBarButtons.length; j++) {
          if (TopBarButtons[j].id == topBarIdList[i]) {
            butText = TopBarButtons[j].strName;
            break;
          };
        };
        new NavButMaker(TopBar, "mainHeader_topButton", ("topBar_" + topBarIdList[i]), butText, null, null);
      };
    };
    // наполняем главный навигатор кнопками
    for (let i = 0; i < UiData.navigat.main.length; i++) {
      let selectedVal = UiData.navigat.main[i];
      new NavButMaker(MainNavigator, "mNavig_button", ("nav-" + selectedVal.scnLinkName), selectedVal.textName, selectedVal.scnLinkName);
    };
    // наполняем footer кнопками/ссылками
    for (var i = 0; i < UiData.navigat.links.length; i++) {
      let selectedVal = UiData.navigat.links[i];
      new NavButMaker(MainFooter, "mFooter_button", ("footer-" + selectedVal.id), selectedVal.textName, null, selectedVal.linkStr);
    };
    MainWindowObj.main_page();
  };

  // при первом входе - запускаем стартер
  if (WorkSpace.scnLinkName == "") {
    getStart();
  };

  // генератор кнопок: ("мать", "наименование класса", "наименование id", "текстовое содержимое", "scn", "ссылка на внешний источник")
  function NavButMaker(mother, className, idName, textContent, scnVal, httpLink) {
    let child = document.createElement('button');
    if (typeof idName == "string") {
      child.id = idName;
    };
    if (typeof className == "string") {
      child.className = className;
    };
    if (typeof textContent == "string") {
      child.textContent = textContent;
    };
    if (typeof scnVal == "string") {
      child.onclick = () => mainWindow_generator(scnVal, textContent);
    };
    if (typeof httpLink == "string") {
      child.onclick = () => document.location = httpLink;
    };
    mother.appendChild(child);
    return child;
  };

  // создание поля под навигатор боковой панели
  function addNavigat() {
    let target = document.getElementById('mainNav');
    let navigat = document.createElement('div');
    navigat.id = "mainNavigator";
    target.appendChild(navigat);
    return navigat;
  };

  // строитель главного окна
  function mainWindow_generator(scnLinkName, txtVal) {
    let scn = scnLinkName;
    if (WorkSpace.scnLinkName == scn) {
      return;
    };
    WorkSpace.scnLinkName = scnLinkName;
    WorkSpace.textName = txtVal;

    let mWindow = document.getElementById('mainWindow');

    while (mWindow.firstChild) {
      mWindow.removeChild(mWindow.firstChild);
    };

    let mScnDataList = UiData.navigat.main;
    // получаем список id`шников кнопок вернего бара (согласно текущему scn)
    let topBarIdList = [];
    for (var i = 0; i < mScnDataList.length; i++) {
      if (mScnDataList[i].scnLinkName == scn) {
        topBarIdList = mScnDataList[i].topBarId;
        break;
      };
    };
    while (TopBar.firstChild) {
      TopBar.removeChild(TopBar.firstChild);
    };
    // наполняем вехний бар кнопками
    for (var i = 0; i < topBarIdList.length; i++) {
      if (document.getElementById("topBar_" + topBarIdList[i]) == null) {
        let butText = "";
        for (var j = 0; j < TopBarButtons.length; j++) {
          if (TopBarButtons[j].id == topBarIdList[i]) {
            butText = TopBarButtons[j].strName;
            break;
          };
        };
        new NavButMaker(TopBar, "mainHeader_topButton", ("topBar_" + topBarIdList[i]), butText, null, null);
      };
    };
    let target = document.getElementById('mainWindow');
    // создаем рабочую область
    switch (scn) {
      case "main_page": //"Главная страница"
        MainWindowObj.main_page();
        break;
      case "story_page":  //"История"
        MainWindowObj.story_page();
        break;
      case "wikibook":  //"«Wiki-Book»"
        MainWindowObj.wikibook();
        break;
      case "all_content": //"Все статьи"
        MainWindowObj.all_content();
        break;
      case "my_games":  //"«Разбор полетов»"
        MainWindowObj.my_games();
        break;
      default:
        break;
    };
  };



  // наполнение блоками со статьями из вк______________________________________
  function makeContentCube(parrentTarget, vkArticle, uName) {
    let target = document.getElementById(parrentTarget);
    console.log("target:: ");
    console.log(target);
    let divValue = document.createElement('div');
    let innDivValue = document.createElement('div');
    divValue.className = "contentCube";
    divValue.style = "";
    innDivValue.id = ("vk_article_-" + vkArticle);
    VK.Widgets.Article(("vk_article_-" + vkArticle), ("@-" + uName));
    divValue.appendChild(innDivValue);


    target.appendChild(divValue);
  };

  // копирование объекта (дубликат, не ссылка)_________________________________
  function makeClone(old_obj) {
    let newObj = new_obj || {};
    for (let key in old_obj) {
      newObj[key] = old_obj[key];
    };
    return newObj;
  };

  // сортировка чисел
  function numbSort(a, b) {
    return a-b;
  };

  // let atest = [1, 2, 3];
  // let btest = [3, 8, 4, 5, 1];
  // let restest = [];
  // console.log("atest: " + atest);
  // console.log("btest: " + btest);
  // console.log("restest: " + restest);
  // restest = restest.concat(atest, btest);
  // console.log("restest: " + restest);
  // console.log(restest.indexOf(3, 0));
  //
  // console.log("sort atest: " + atest.sort(numbSort));
  // console.log("sort btest: " + btest.sort(numbSort));
  // console.log("sort restest: " + restest.sort(numbSort));

  // Метод sort можно удобно использовать с функциональными выражениями (и замыканиями):
  // var numbers = [4, 2, 5, 1, 3];
  // numbers.sort(function(a, b) {
  //   return a - b;
  // });
  // console.log(numbers); // [1, 2, 3, 4, 5]
  // ---------------------------------------------------
  // Объекты могут быть отсортированы по значению одного из своих свойств.
  // var items = [
  //   { name: 'Edward', value: 21 },
  //   { name: 'Sharpe', value: 37 },
  //   { name: 'And', value: 45 },
  //   { name: 'The', value: -12 },
  //   { name: 'Magnetic' },
  //   { name: 'Zeros', value: 37 }
  // ];
  // items.sort(function (a, b) {
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   // a должно быть равным b
  //   return 0;
  // });

});
