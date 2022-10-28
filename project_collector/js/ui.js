$(document).ready(function(){
  "use strict";

  const WorkSpace = {
    scnLinkName: "",
    textName: "",
  };
  const MainNavigator = addNavigat();
  // при первом входе - запускаем стартер
  if (WorkSpace.scnLinkName == "") {
    getStart();
  };

  function getStart() {
    // наполняем начальными данными рабочее пространство
    WorkSpace.scnLinkName = ScnData.scnLinkName;
    WorkSpace.textName = ScnData.textName;
    // наполняем главный навигатор кнопками
    for (let i = 0; i < UiData.navigat.main.length; i++) {
      let selectedVal = UiData.navigat.main[i];
      navButMaker(MainNavigator, "mNavig_button", ("nav-" + selectedVal.scnLinkName), selectedVal.textName, selectedVal.scnLinkName);
    };
  };

  // генератор кнопок: ("мать", "наименование класса", "наименование id", "текстовое содержимое", "scn")
  function navButMaker(mother, className, idName, textContent, scnVal) {
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
    switch (scn) {
      case "main_page":
        break;
      case "story_page":
        let vkPosts = ContentData.vk.posts;
        for (var i = 0; i < vkPosts.length; i++) {
          makeContentCube(vkPosts[i].vk_article, vkPosts[i].uName);
        };
        break;
      default:
        break;
    };
  };



  // наполнение блоками со статьями из вк______________________________________
  function makeContentCube(vkArticle, uName) {
    let divValue = document.createElement('div');
    let target = document.getElementById('mainWindow');
    divValue.id = ("vk_article_-" + vkArticle);
    target.appendChild(divValue);
    VK.Widgets.Article(("vk_article_-" + vkArticle), ("@-" + uName));
    divValue.style = null;
    divValue.className = "contentCube";
  };

  mainWindow_generator(WorkSpace.scnLinkName, "Главная страница");
});
