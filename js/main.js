$(document).ready(function(){
  "use strict";

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

});
