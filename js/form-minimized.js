var buttonsearch=document.querySelector(".open-modal-button"),hotelsearch=document.querySelector(".hotel-search-inner");buttonsearch.addEventListener("click",function(e){e.preventDefault(),hotelsearch.classList.toggle("form-invisible")});var buttonplus=document.querySelectorAll(".button-plus"),buttonmines=document.querySelectorAll(".button-mines"),people=document.querySelectorAll(".form-people"),peoplefrstvalue=Number(people[0].value),peoplescndvalue=Number(people[1].value);buttonplus[0].addEventListener("click",function(e){e.preventDefault(),peoplefrstvalue+=1,people[0].value=peoplefrstvalue}),buttonmines[0].addEventListener("click",function(e){e.preventDefault(),peoplefrstvalue<=0?console.log("Невозможно указать значение меньше 0"):(peoplefrstvalue-=1,people[0].value=peoplefrstvalue)}),buttonplus[1].addEventListener("click",function(e){e.preventDefault(),peoplescndvalue+=1,people[1].value=peoplescndvalue}),buttonmines[1].addEventListener("click",function(e){e.preventDefault(),peoplescndvalue<=0?console.log("Невозможно указать значение меньше 0"):(peoplescndvalue-=1,people[1].value=peoplescndvalue)});