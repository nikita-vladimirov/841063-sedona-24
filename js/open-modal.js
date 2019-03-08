var buttonsearch = document.querySelector(".open-modal-button");

var hotelsearch = document.querySelector(".hotel-search-inner");

buttonsearch.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    hotelsearch.classList.toggle ("form-invisible");
});
