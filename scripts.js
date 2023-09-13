var rating_btns = document.querySelectorAll(".btn");
var submit_btn = document.querySelector(".submit-btn");
var rating_result = document.querySelector(".result-text span");
var rating_section = document.querySelector(".rating");
var result_section = document.querySelector(".result");

let rating = null;


rating_btns.forEach((rating_btn) => {
    rating_btn.addEventListener("click", (e) => {

        const checked = document.querySelector('.checked');
        if (checked) {
            checked.classList.remove("checked");
        }
        const btn = e.target;
        btn.classList.add("checked");
        rating = e.target.innerText;
    })
})
   
submit_btn.addEventListener("click", (e) => {
    if (rating) {
        rating_result.innerText = rating;
        rating_section.classList.add("hidden");
        result_section.classList.remove("hidden");
    }
});