const bar = document.getElementById("bar");
const xtimes = document.getElementById("xtimes")
const navbar = document.getElementById("navbar")

bar.addEventListener('click', ()=>{
    navbar.style.right = 0;
    bar.style.opacity= 0;
    xtimes.style.opacity= 1;

})
xtimes.addEventListener('click', ()=>{
    navbar.style.right = "-300px";
    bar.style.opacity= 1;
    xtimes.style.opacity= 0;

})