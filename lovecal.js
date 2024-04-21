let disp = document.querySelector(".display");
let btn = document.querySelector(".ip");



function calculateLove(){
    let name1 = document.querySelector(".name1").value;
    let name2 = document.querySelector(".name2").value;
    if(name1==="" && name2===""){
        disp.innerText="Please enter names"
    }else{
        disp.innerText = ` Love percentage between ${name1} and ${name2} is ${Math.floor(Math.random()*100+1)}😉❤️`;
    }
}

btn.addEventListener("click", calculateLove);
