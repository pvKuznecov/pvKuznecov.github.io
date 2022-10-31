$(document).ready(function(){
  "use strict";

  const WorkSpace = {
    scnLinkName: "",
    textName: "",
  };
  const MainNavigator = addNavigat();
  const MainFooter = document.getElementById('mainFooter');
  const TopBar = document.getElementById('mainHeader');
  // при первом входе - запускаем стартер
  if (WorkSpace.scnLinkName == "") {
    getStart();
  };

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


    switch (scn) {
      case "main_page":
        break;
      case "story_page":
        let vkPosts = ContentData.vk.posts;
        for (var i = 0; i < vkPosts.length; i++) {
          makeContentCube(vkPosts[i].vk_article, vkPosts[i].uName, vkPosts[i].tags);
        };
        break;
      default:
        break;
    };
  };



  // наполнение блоками со статьями из вк______________________________________
  function makeContentCube(vkArticle, uName, tagsList) {
    let divValue = document.createElement('div');
    let target = document.getElementById('mainWindow');
    divValue.id = ("vk_article_-" + vkArticle);
    target.appendChild(divValue);
    VK.Widgets.Article(("vk_article_-" + vkArticle), ("@-" + uName));
    divValue.style = null;
    divValue.className = "contentCube";
  };

  // копирование объекта (дубликат, не ссылка)_________________________________
  function makeClone(old_obj) {
    let newObj = new_obj || {};
    for (let key in old_obj) {
      newObj[key] = old_obj[key];
    };
    return newObj;
  };

  mainWindow_generator(WorkSpace.scnLinkName, "Главная страница");
});
