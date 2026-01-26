
const unhide  = document.querySelector(".unhide")
unhide.addEventListener("click",()=>{
  const menu = document.getElementById('hiddenMenu');
  menu.style.display = 'block';
menu.querySelector('button').focus();
})

