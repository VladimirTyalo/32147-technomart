


// catalog.html //
var buyButtons = document.querySelectorAll(".product-post__button-by");
var cartNotification = document.querySelector(".cart-notification");
var cartNotificationClose =  document.querySelector(".icon-close");
var cartItemsAmount = document.querySelector(".top-header__cart .top-header__amount");
var btnWriteUs = document.querySelector(".index-button--delivery-map");

var popUpFeedbackForm = document.querySelector(".feedback-form");
var popUpFeedbackName = document.querySelector("[name=feedback-form__name]");
var popUpFeedbackMail = document.querySelector("[name=feedback-form__mail]");
var popUpFeedbackText = document.querySelector("[name=feedback-form__text]");

var storageName = localStorage.getItem("storageName");
var storageMail = localStorage.getItem("storageMail");


var modalMap = document.querySelector(".modal-content-map");
var mapLink = document.querySelector(".delivery-map__map-area");

var popUpFeedbackClose = document.querySelector(".feedback-form .icon-close");




// for index.html
window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27 ){
        popUpFeedbackForm.classList.remove("modal-content-show");
        popUpFeedbackForm.classList.remove("modal-error");
        modalMap.classList.remove("modal-content-show");
    }
});

// for catalog.html
window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    cartNotification.classList.remove("modal-content-show");
  }
})

for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function(event) {
      event.preventDefault();
      cartNotification.classList.add("modal-content-show");
        var value = parseInt(cartItemsAmount.innerHTML);
        value = value + 1;
        cartItemsAmount.innerHTML = (value + "");
    });
};


cartNotificationClose.addEventListener("click", function(event) {
  event.preventDefault();
  cartNotification.classList.remove("modal-content-show");
});

// index write us modal window //
btnWriteUs.addEventListener("click", function(event) {
    event.preventDefault();
    popUpFeedbackForm.classList.add("modal-content-show");
    popUpFeedbackName.focus();
    if(storageName) {
      popUpFeedbackName.value = storageName;
      popUpFeedbackMail.focus();
    }
    if(storageMail) {
      popUpFeedbackMail.value = storageMail;
      popUpFeedbackText.focus();
    }
  });


popUpFeedbackClose.addEventListener("click", function(event) {
    event.preventDefault();
    popUpFeedbackForm.classList.remove("modal-content-show");
    popUpFeedbackForm.classList.remove("modal-error");
  });

popUpFeedbackForm.addEventListener("submit", function(event) {
      popUpFeedbackForm.classList.remove("modal-error");
      popUpFeedbackForm.offsetHeight; // trigger a reflow flashes css changes

    if (!popUpFeedbackName.value || !popUpFeedbackMail.value) {
      event.preventDefault();
      popUpFeedbackForm.classList.add("modal-error");
      if(!popUpFeedbackName.value){
        popUpFeedbackName.style.background = "rgba(255,0,0,0.3)";
      }
      else {
       var name = popUpFeedbackName.value;
       localStorage.setItem("storageName", name);
      }
      if(!popUpFeedbackMail.value){
        popUpFeedbackMail.style.background = "rgba(255,0,0,0.3)";
      }
      else {
        var emale = popUpFeedbackMail.value;
        localStorage.setItem("storageMail", emale);
      }
      return;
    }

    popUpFeedbackForm.submit();
  });


popUpFeedbackName.addEventListener("focus", function() {
      popUpFeedbackName.style.background = "#ffffff";
      // localStorage.removeItem("storageName");
  });

popUpFeedbackMail.addEventListener("focus", function() {
      popUpFeedbackMail.style.background = "#ffffff";
      // localStorage.removeItem("storageMail");

  });

popUpFeedbackText.addEventListener("focus", function() {
      popUpFeedbackText.style.background = "#ffffff";
      // localStorage.removeItem("storageText");
  });




// map modal window //
mapLink.addEventListener("click", function(event) {
   event.preventDefault();
   modalMap.classList.add("modal-content-show");
   popUpFeedbackForm.offsetHeight;
   console.log("hello mapLink");
});

var mapClose = document.querySelector(".modal-content-map .icon-close");

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.remove("modal-content-show");
})




