let toggler = document.querySelector(".toggle");

toggler.focus()

function toggleSwitch(e){
   if(e.key !== "Enter" && e.key !== " " && e.type !== "click"){
    return
}
e.preventDefault()
let currentState = toggler.getAttribute("aria-checked")==="true";
let isOn = !currentState;

toggler.textContent = isOn? "On" : "Off"
toggler.setAttribute("aria-checked", String(isOn));
}

toggler.addEventListener("keydown", toggleSwitch);
toggler.addEventListener("click", toggleSwitch);