$(document).ready(function(){
  "use strict";

  // function showSContent(textId, textContentid) {
  //   let elem = document.querySelector(textId);
  //   if ($(textName).is(":hidden")) {
  //           $(textContent).show("slow");
  //       } else {
  //           $(textContent).hide("slow");
  //       }
  //       return false;
  //   };
  //
  $(".section_contentName").click(function () {
    let elem = document.querySelector(".section_contentName");
    let thisElem = $(this);
    let parent = elem.closest('.section_content');
    let parentId = parent.id;
    console.log("elem::" + elem);
    console.log("AAAAAAA" + this.value);
    console.log("2" + thisElem.currentTarget);
    console.log("thisElem::" + thisElem);
    console.log(thisElem.id);
    console.log(parent);
    console.log(parentId);
    console.log("____________________");

    if ($(".section_contentText").is(":hidden")) {
            $(".section_contentText").show("slow");
        } else {
            $(".section_contentText").hide("slow");
        }
        return false;
    });


});
