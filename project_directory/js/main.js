$(document).ready(function(){
  "use strict";

  $(".nav_showAction").click(function () {
    if ($(".nav_hName").is(":hidden")) {
      $(".nav_hName").show();
      $(".main_navigator").width("9%");
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
