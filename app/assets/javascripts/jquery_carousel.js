$(document).ready(function() {
  
  // Set up
  var imagesArray = [];
  var appIconsArray = [];
  var dictionary = [];
  var currentVisibleScreensIndex = 0;

  dictionary.push({key: 0, value: "apple_watch"});
  dictionary.push({key: 1, value: "etsy"});
  // dictionary.push({key: 2, value: "capsule"});
  // dictionary.push({key: 3, value: "mixel"});

  imagesArray = $(".image_wrapper").find("li");
  appIconsArray = $(".app_icon_wrapper").find("li");
  hideAllImages(imagesArray);
  hideAllDots(appIconsArray);

  $(imagesArray[0]).removeClass("hide").addClass("transition");
  $(appIconsArray[0]).removeClass("hide").addClass("transition");
  $(appIconsArray[0]).find("span").removeClass("hide");


  // Listen for clicks on app icons
  $(appIconsArray).click(function() {
    var appsIndex = $(".app_icon_wrapper").find("li").index(this);
    
    if (currentVisibleScreensIndex != appsIndex) {
      showCorrectScreen(appsIndex, currentVisibleScreensIndex);
      currentVisibleScreensIndex = appsIndex;
    }
  });


  function hideAllImages(imagesArray) {
    var elementsInArray = imagesArray.length;

    for (var i = 0; i < elementsInArray; i++) {
      $(imagesArray[i]).addClass("hide");
    }
  }

  function hideAllDots(appIconsArray) {
    var elementsInArray = appIconsArray.length;

    for (var i = 0; i < elementsInArray; i++) {
      $(appIconsArray[i]).find("span").addClass("hide");
    }
  }


  function showCorrectScreen(appsIndex, currentVisibleScreensIndex) {

    var addThisClass = dictionary[appsIndex].value;
    var removeThisClass = dictionary[currentVisibleScreensIndex].value;
    $('body').addClass(addThisClass).removeClass(removeThisClass);

    $(imagesArray[currentVisibleScreensIndex]).addClass("hide").removeClass("transition");
    $(appIconsArray[currentVisibleScreensIndex]).find("span").addClass("hide");
    $(imagesArray[appsIndex]).removeClass("hide").addClass("transition");
    $(appIconsArray[appsIndex]).find("span").removeClass("hide");
    return appsIndex;
  }
});

