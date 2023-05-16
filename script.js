//For Triangle
let b_input, h_input;
function triangleArea(){
    let list = document.getElementById("card_4");
    b_input = document.getElementById("input_b").value;
    h_input = document.getElementById("input_h").value;
    let li = document.createElement('li');
    li.innerText = "Triangle Area "+ 0.5*b_input*h_input;
    list.appendChild(li);
}

//For Rectangle
let w_input, i_input;
function rectangleArea(){
    let list = document.getElementById("card_4");
    w_input = document.getElementById("input_w").value;
    i_input = document.getElementById("input_i").value;
    let li = document.createElement('li');
    li.innerText = "Rectangle Area "+ w_input*i_input;
    list.appendChild(li);
}

//For Parallelogram
let bb_input, hh_input;
function parallelogramArea(){
    let list = document.getElementById("card_4");
    bb_input = document.getElementById("input_bb").value;
    hh_input = document.getElementById("input_hh").value;
    let li = document.createElement('li');
    li.innerText = "Parallelogram Area "+ bb_input*hh_input;
    list.appendChild(li);
}