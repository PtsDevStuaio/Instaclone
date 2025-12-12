const add = document.getElementsByClassName(".add")
const home = document.querySelector(".homebtn")
const profile = document.querySelector(".Youbtn")
profile.addEventListener("click", 
  ()=>{
    window.location.href = "profile.html";
  }
)
const user = prompt("enter username")
const username = document.querySelector(".username")
username.innerHTML = user;