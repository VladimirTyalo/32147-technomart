var catalogBuyButtons = document.querySelectorAll(".catalog .product-post__button-by");
var indexBuyButtons = document.querySelectorAll(".index .product-post__button-by");
var cartNotification = document.querySelector(".cart-notification");
var cartNotificationClose = document.querySelector(".cart-notification .icon-close");
var cartItemsAmount = document.querySelector(".top-header__cart .top-header__amount");
var btnWriteUs = document.querySelector(".index-button--delivery-map");
var topHeaderCart = document.querySelector(".top-header__cart");

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
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    popUpFeedbackForm.classList.remove("modal-content-show");
    popUpFeedbackForm.classList.remove("modal-error");
    modalMap.classList.remove("modal-content-show");
  }
});

// for catalog.html
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    cartNotification.classList.remove("modal-content-show");
  }
});

for (var i = 0; i < catalogBuyButtons.length; i++) {
  catalogBuyButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    cartNotification.classList.add("modal-content-show");
    var value = parseInt(cartItemsAmount.innerHTML);
    value = value + 1;

    cartItemsAmount.innerHTML = (value + "");
  });
}


for (var i = 0; i < indexBuyButtons.length; i++) {
  indexBuyButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    cartNotification.classList.add("modal-content-show");
    var value = parseInt(cartItemsAmount.innerHTML);
    value = value + 1;
    cartItemsAmount.innerHTML = (value + "");
    topHeaderCart.classList.add("top-header--active");
  });
}


cartNotificationClose.addEventListener("click", function (event) {
  event.preventDefault();
  cartNotification.classList.remove("modal-content-show");
});

cartNotificationClose.addEventListener("click", function (event) {
  event.preventDefault();
  cartNotification.classList.remove("modal-content-show");
});

// index write us modal window //
btnWriteUs.addEventListener("click", function (event) {
  event.preventDefault();
  popUpFeedbackForm.classList.add("modal-content-show");
  popUpFeedbackForm.classList.add("bounce");
  popUpFeedbackName.focus();


  popUpFeedbackName.value = storageName;
  popUpFeedbackMail.focus();


  popUpFeedbackMail.value = storageMail;
  popUpFeedbackText.focus();
});


popUpFeedbackClose.addEventListener("click", function (event) {
  event.preventDefault();
  popUpFeedbackForm.classList.remove("bounce");
  popUpFeedbackForm.classList.remove("modal-content-show");
  popUpFeedbackForm.classList.remove("modal-error");
});




popUpFeedbackForm.addEventListener("submit", function (event) {
  popUpFeedbackForm.classList.remove("modal-error");
  popUpFeedbackForm.classList.remove("bounce");
  popUpFeedbackForm.offsetHeight; // trigger a reflow flashes css changes
  var valid = true;


  if (!popUpFeedbackName.value) {
    event.preventDefault();
    popUpFeedbackForm.classList.add("modal-error");
    popUpFeedbackForm.offsetHeight;
    popUpFeedbackName.style.background = "rgba(255,0,0,0.3)";
    valid = false;
  }
  else {
    var name = popUpFeedbackName.value;
    localStorage.setItem("storageName", name);
  }


  if (!popUpFeedbackMail.value) {
    event.preventDefault();
    popUpFeedbackForm.classList.add("modal-error");
    popUpFeedbackForm.offsetHeight;
    popUpFeedbackMail.style.background = "rgba(255,0,0,0.3)";
    valid = false;
  }
  else {
    var mail = popUpFeedbackMail.value;
    localStorage.setItem("storageMail", mail);
  }

  if(valid) popUpFeedbackForm.submit();
});


popUpFeedbackName.addEventListener("focus", function () {
  popUpFeedbackName.style.background = "#ffffff";
});

popUpFeedbackMail.addEventListener("focus", function () {
  popUpFeedbackMail.style.background = "#ffffff";

});

popUpFeedbackText.addEventListener("focus", function () {
  popUpFeedbackText.style.background = "#ffffff";
});

// map modal window //
mapLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalMap.classList.add("modal-content-show");
  popUpFeedbackForm.offsetHeight;
});


var mapClose = document.querySelector(".modal-content-map .icon-close");
mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  modalMap.classList.remove("modal-content-show");
});


