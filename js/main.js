const meal = document.getElementById("meal");
const imgDes = document.querySelectorAll(".imgDes")
let mealArray = [];
const cateogries = document.getElementById("cateogries");
let dataRow = document.getElementById('dataRow');




async function getData() {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    mealArray = await data.json();
    console.log(mealArray);
    display(mealArray)


}
getData()

function display(arr) {
    console.log(arr);

    let cartona = "";
    for (let i = 0; i < 20; i++) {
        cartona += `
    
    <div class="col-md-3 ">
 <div class="first-meal text-center w-100 position-relative">
    <img src="${arr.meals[i].strMealThumb}" onclick="dataDetails(${arr.meals[i].idMeal})" alt=""  class="w-100  imgDes">
    <div class="layer"> <h4>${arr.meals[i].strMeal}</h4> </div>
    

    
    </div>
    </div>
    
    `

    }

    meal.innerHTML = cartona;


}


async function dataDetails(mealListId) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealListId}`);
    let details = await data.json();
    console.log(details);
    displayDetails(details)

}
dataDetails();



$(".openClose").on("click", function () {
    let ourLeft = $(".left-side").innerWidth();
    if ($(".side-nav").css("left") == "0px") {
        $(".side-nav").animate({ left: `-${ourLeft}` }, 1500)

    } else {
        $(".side-nav").animate({ left: 0 }, 1500)
    }

})

function displayDetails(details) {


}


async function dataCategory() {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let category = await data.json();
    console.log(category);
    displayCategory(category)
}
dataCategory()

cateogries.addEventListener("click", function () {
    displayCategory();
})

function displayCategory(types) {
    console.log(types);
    cartona = ""
    for (i = 0; i < types.length; i++) {
        cartona += `

         <div class="col-md-3">
         <div class="first-meal">
         <img src="${types.categories[i].strCategoryThumb} class="position-relative">
                    
                    <div class="layer"><h3>${types.categories[i].strCategory}</h3></div>
         </div>
         
                    
                </div>
        
        
        
        `

    }

}
const nameInput = document.getElementById("nameInput");
const nameAlert = document.getElementById("nameAlert");
const emailInput = document.getElementById("emailInput");
const emailAlert = document.getElementById("emailAlert");
const phoneInput = document.getElementById("phoneInput");
const phoneAlert = document.getElementById("phoneAlert");
const ageInput = document.getElementById('ageInput');
const ageAlert = document.getElementById('ageAlert');
const passInput = document.getElementById('passInput');
const passAlert = document.getElementById('passAlert');
const repassInput = document.getElementById('repassInput');
const repassAlert = document.getElementById('repassAlert');

nameInput.addEventListener("input", () => {
    if (nameInput.value !== "" && nameInputfunction(nameInput.value)) {
        nameAlert.classList.replace("d-block", "d-none")

    } else {
        nameAlert.classList.replace("d-none", "d-block");
        checkvalidation();
    }
})

emailInput.addEventListener("input", () => {
    if (emailInput.value !== "" && emailInputfunction(emailInput.value)) {
        emailAlert.classList.replace("d-block", "d-none")
    } else {
        emailAlert.classList.replace("d-none", "d-block");
        checkvalidation()
    }
})

ageInput.addEventListener("input", () => {
    if (ageInput.value !== "" && ageInputfunction(ageInput.value)) {
        ageAlert.classList.replace("d-block", "d-none")
    } else {
        ageAlert.classList.replace("d-none", "d-block");
        checkvalidation()
    }
})

passInput.addEventListener("input", () => {
    if (passInput.value !== "" && passInputfunction(passInput.value)) {
        passAlert.classList.replace("d-block", "d-none")
    } else {
        passAlert.classList.replace("d-none", "d-block");
        checkvalidation()
    }
})

repassInput.addEventListener("input", () => {
    if (repassInput.value !== "" && passInputfunction(repassInput.value) && repassInput.value === passInput.value) {
        repassAlert.classList.replace("d-block", "d-none");
    } else {
        repassAlert.classList.replace("d-none", "d-block");
        checkvalidation()
    }
})
phoneInput.addEventListener("input", () => {
    if (phoneInput.value !== "" && phoneInputfunction(phoneInput.value)) {
        phoneAlert.classList.replace("d-block", "d-none")
    } else {
        phoneAlert.classList.replace("d-none", "d-block");
        checkvalidation()
    }
})

function emailInputfunction(value){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(value)
}

function nameInputfunction(value){
    const nameRegex=/^[A-Za-z]+$/;
    return nameRegex.test(value);
}
function phoneInputfunction(value){
    phoneRegex=/^(\d{10}|\d{11})$/;
    return phoneRegex.test(value);
}

function ageInputfunction(value){
    const ageRegex=/^(1[8-9]|[2-5][0-9]|60)$/;
    return ageRegex.test(value);

}
function passinputFunction(value) {
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passRegex.test(value);
}
function checkvalidation(){
    const submitBtn = document.getElementById('submitBtn');
    if (nameInputfunction(nameInput.value) && emailInputfunction(emailInput.value) && phoneInputfunction(phoneInput.value) && ageInputfunction(ageInput.value) && passInputfunction(passInput.value) && passInputfunction(repassInput.value) && repassInput.value === passInput.value) {
        submitBtn.removeAttribute('disabled');
    }
    else {
 
        submitBtn.setAttribute('disabled', '');
    }
}