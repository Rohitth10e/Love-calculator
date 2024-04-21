let disp = document.querySelector(".display");
let btn = document.querySelector(".ip");



function calculateLove(){
    let name1 = document.querySelector(".name1").value;
    let name2 = document.querySelector(".name2").value;
    disp.innerText = ` Love percentage between ${name1} and ${name2} is ${Math.floor(Math.random()*100+1)}😉❤️`;
    console.log(name1,name2)
}

btn.addEventListener("click", calculateLove);
