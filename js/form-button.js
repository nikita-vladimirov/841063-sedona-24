var buttonplus = document.querySelectorAll(".button-plus");
var buttonmines = document.querySelectorAll(".button-mines");
var people = document.querySelectorAll (".form-people");

var peoplefrstvalue = Number(people[0].value);
var peoplescndvalue = Number(people[1].value);

buttonplus[0].addEventListener ("click", function (evt) {
    evt.preventDefault ();
    peoplefrstvalue = peoplefrstvalue + 1;
    people[0].value = peoplefrstvalue;
});

buttonmines[0].addEventListener ("click", function (evt) {
    evt.preventDefault ();
    if (peoplefrstvalue <= 0) {
        console.log("Невозможно указать значение меньше 0")
    } else {
        peoplefrstvalue = peoplefrstvalue - 1;
        people[0].value = peoplefrstvalue;
    };
});

buttonplus[1].addEventListener ("click", function (evt) {
    evt.preventDefault ();
    peoplescndvalue = peoplescndvalue + 1;
    people[1].value = peoplescndvalue;
});

buttonmines[1].addEventListener ("click", function (evt) {
    evt.preventDefault ();
    if (peoplescndvalue <= 0) {
        console.log("Невозможно указать значение меньше 0")
    } else {
        peoplescndvalue = peoplescndvalue - 1;
        people[1].value = peoplescndvalue;
    };
});