let toggler = document.querySelector(".toggle");


toggler.addEventListener("keydown",(e)=>{
  if(e.key !== "Enter" && e.key !== " "){
    return
}
e.preventDefault()
let currentState = toggler.getAttribute("aria-checked");
console.log(currentState)
})