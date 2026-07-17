let num1 = [];
let num2 = [];

let numset1 = [7,8,9]

let calculation=document.querySelector(".calcs");
let one=document.querySelector(".one");



numset1.map((val, index)=>{
const childDiv = document.createElement("div");

childDiv.className = "btn";
childDiv.textContent = val;
childDiv.id = `one-${index}`

one.appendChild(childDiv);


})

let num_seven_div = document.getElementById("one-0");
num_seven_div.addEventListener("click", ()=>{
    calculation.innerHTML+= "7"
})

let num_eight_div = document.getElementById("one-1");
num_eight_div.addEventListener("click",()=>{
    calculation.innerHTML+= "8"
});

let num_nine_div = document.getElementById("one-2");
num_nine_div.addEventListener("click",()=>{
    calculation.innerHTML+= "9"
});




let numset2 = [4,5,6]
let two=document.querySelector(".two");
numset2.map((val,index)=>{
    const childDiv=document.createElement("div");
    childDiv.className = "btn";
    childDiv.textContent = val;
    childDiv.id = `two-${index}`
    two.appendChild(childDiv)
})


let num_four_div = document.getElementById("two-0");
num_four_div.addEventListener("click",()=>{
    calculation.innerHTML+= "4"
});

let num_five_div = document.getElementById("two-1");
num_five_div.addEventListener("click",()=>{
    calculation.innerHTML+= "5"
});

let num_six_div = document.getElementById("two-2");
num_six_div.addEventListener("click",()=>{
    calculation.innerHTML+= "6"
    
});



let numset3 = [1,2,3]
let three=document.querySelector(".three");



numset3.map((val, index)=>{
const childDiv = document.createElement("div");

childDiv.className = "btn";
childDiv.textContent = val;
childDiv.id = `three-${index}`

three.appendChild(childDiv);
})

let num_one_div = document.getElementById("three-0");
num_one_div.addEventListener("click",()=>{
    calculation.innerHTML += "1"
});


let num_two_div = document.getElementById("three-1");
num_two_div.addEventListener("click",()=>{
    calculation.innerHTML+= "2"
});

let num_three_div = document.getElementById("three-2");
num_three_div.addEventListener("click",()=>{
    calculation.innerHTML+= "3"
});

let numset4 = [0,".","e"]
let four=document.querySelector(".four");


numset4.map((val, index)=>{
const childDiv = document.createElement("div");

childDiv.className = "btn";
childDiv.textContent = val;
childDiv.id = `four-${index}`

four.appendChild(childDiv);
})

let num_zero_div = document.getElementById("four-0");
num_zero_div.addEventListener("click",()=>{
    calculation.innerHTML+= "0"
});

let num_point_div = document.getElementById("four-1");
num_point_div.addEventListener("click",()=>{
    calculation.innerHTML+= "."
});

let num_exponent_div = document.getElementById("four-2");
num_exponent_div.addEventListener("click",()=>{
    calculation.innerHTML+= "e"
});

let reset_btn=document.querySelector(".reset");
reset_btn.addEventListener("click",()=>{
    calculation.innerHTML=""
})

let opset1=["x","/"]
let firstop=document.querySelector(".op1")

opset1.map((val,index)=>{
    const childDiv=document.createElement("div")
    childDiv.className = "ops"
    childDiv.textContent=val
    childDiv.id = `five-${index}`
    firstop.appendChild(childDiv);
})
let opset2=["+","-"]
let secondop=document.querySelector(".op2")
opset2.map((val,index)=>{
    const childDiv=document.createElement("div")
    childDiv.className = "ops"
    childDiv.textContent=val
    childDiv.id = `six-${index}`
    secondop.appendChild(childDiv);
})

let opset3=["Ans","="]
let thirdop=document.querySelector(".op3")
opset3.map((val,index)=>{
    const childDiv=document.createElement("div")
    childDiv.className = "ops"
    childDiv.textContent=val
    childDiv.id = `seven-${index}`
    thirdop.appendChild(childDiv);
})

let mul_op=document.getElementById("five-0");
mul_op.addEventListener("click",()=>{
    calculation.innerHTML+="<b>x<b/>"
})
let divi_op=document.getElementById("five-1");
divi_op.addEventListener("click",()=>{
    calculation.innerHTML+="<b>/<b/>"
})
let plus_op=document.getElementById("six-0");
plus_op.addEventListener("click",()=>{
    calculation.innerHTML+="<b>+<b/>"
})
let minus_op=document.getElementById("six-1");
minus_op.addEventListener("click",()=>{
    calculation.innerHTML+="<b>-<b/>"
})
