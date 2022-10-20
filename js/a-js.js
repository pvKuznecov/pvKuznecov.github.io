$(document).ready(function(){
  "use strict";

  let dDATA = JSON.parse(data);
  // console.log(dDATA);

  // Автоматическое наполнение поисковой строки всплывающим текстом-------------
  let optionsListResult = [];
  for (let prop in dDATA.definitions) {
    console.log("prop: " + prop);
    optionsListResult.push(dDATA.definitions[prop].name);
  };
  optionsListResult.sort();

  for (let i = 0; i < optionsListResult.length; i++) {
    let newOElem = document.createElement("option");
    newOElem.textContent = optionsListResult[i];
    let listNameElement = document.getElementById("nav_fText-list");
    listNameElement.appendChild(newOElem);
  };
  // ---------------------------------------------------------------------------
  $(".nav_fButton").click(function () {
    let r_text = document.getElementById('nav_fText').value;
    for (let prop in dDATA.definitions) {
      console.log("1::" + dDATA.definitions[prop].name);
      console.log("2::" + r_text);
      if (dDATA.definitions[prop].name == r_text) {
        console.log ("r::" + dDATA.definitions[prop].text);
        alert(dDATA.definitions[prop].text);
        break;
      };
      alert("Поиск не дал никаких результатов.");
      break;
    };
  });
  // ---------------------------------------------------------------------------

  $(".nav_showAction").click(function () {
    if ($(".nav_hName").is(":hidden")) {
      $(".nav_hName").show();
      $(".main_navigator").width("7%");
    } else {
      $(".nav_hName").hide();
      $(".main_navigator").width("22px");
    }
  });

  $(".section_1_contentName").click(function () {
    if ($(".section_1_contentText").is(":hidden")) {
      $(".section_1_contentText").show("slow");
    } else {
      $(".section_1_contentText").hide("slow");
    }
    return false;
    });

  $(".section_2_contentName").click(function () {
    if ($(".section_2_contentText").is(":hidden")) {
      $(".section_2_contentText").show("slow");
    } else {
      $(".section_2_contentText").hide("slow");
    }
    return false;
    });

  $(".section_3_contentName").click(function () {
    if ($(".section_3_contentText").is(":hidden")) {
      $(".section_3_contentText").show("slow");
    } else {
      $(".section_3_contentText").hide("slow");
    }
    return false;
    });

  $(".section_4_contentName").click(function () {
    if ($(".section_4_contentText").is(":hidden")) {
      $(".section_4_contentText").show("slow");
    } else {
      $(".section_4_contentText").hide("slow");
    }
    return false;
    });

});
