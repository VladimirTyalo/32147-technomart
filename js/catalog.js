
var buyButtons = document.querySelectorAll(".product-post__button-by");
var cartNotification = document.querySelector(".cart-notification");
var cartNotificationClose =  document.querySelector(".icon-close");
var cartItemsAmount = document.querySelector(".top-header__cart .top-header__amount");

console.log("Hellow world");

for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function(event) {
      event.preventDefault();
      cartNotification.classList.add("modal-content-show");
    });
};

cartNotificationClose.addEventListener("click", function(event) {
  event.preventDefault();
  cartNotification.classList.remove("modal-content-show");
});



  window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27 ){
      if(cartNotification.classList.contains("modal-content-show")) {
        cartNotification.classList.remove("modal-content-show");
        var value = parseInt(cartItemsAmount.innerHTML);
        value = value + 1;
        cartItemsAmount.innerHTML = (value + "");
      }
    }
  });




