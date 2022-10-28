$(document).ready(function(){
  "use strict";

const HMaker = {
  newButton: function(mother, className, idName) {
    let child = document.createElement('button');
    console.log("className: " + className);
    mother.appendChild(child);
    return child;
  },
};

const MainNavigator = addNavigat();
function addNavigat() {
  let target = document.getElementById('mainNav');
  let navigat = document.createElement('div');
  navigat.id = "mainNavigator";
  target.appendChild(navigat);
  return navigat;
};

console.log(MainNavigator);
console.log(typeof MainNavigator);
HMaker.newButton(MainNavigator);
console.log(MainNavigator);
console.log(typeof MainNavigator);

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

let vkPosts = ContentData.vk.posts;
for (var i = 0; i < vkPosts.length; i++) {
  console.log(vkPosts[i]);
  makeContentCube(vkPosts[i].vk_article, vkPosts[i].uName);
};
// ____________________________________________________________________________

// console.log(typeof document.body.childNodes);
//
// let mainWindow = document.getElementById('mainWindow');
// console.log(mainWindow);
//
//
// let bodyVal = document.querySelector('body');
// let bodyData = bodyVal.childNodes;
//
// let a = document.getElementById("mainHeader");
// console.log(a);
// console.log(document.getElementById("mainHeader"));
// _______________________________________________________________________

// // console.log(bodyData);
// // console.log(bodyData.length);
// // // console.log(bodyData[0]);
// // // console.log(bodyData[1]);
// // console.log(bodyData.textContent);
// let elementNode = document.createElement('b');
// elementNode.textContent = " мир!";
// // let textNode = document.createTextNode(' мир!');
// console.log(elementNode);
// // console.log(textNode);
// //добавим эти узлы к DOM
// // document.querySelector('p').appendChild(elementNode);
// document.querySelector("p").insertBefore(elementNode, document.querySelector("p").firstElementChild);
// // document.querySelector('b').appendChild(textNode);
//
// let primList = ["а", "б", "в"];
// for (var i = 0; i < primList.length; i++) {
//   // let x = document.createTextNode(primList[i]);
//   // document.querySelector('p').appendChild(x);
//   // document.querySelector('p').appendChild('br');
//
// };
});
