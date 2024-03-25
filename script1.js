var body = document.querySelector("body");
body.setAttribute("style", "display: flex; align-items: top; justify-content: space-evenly; font-family: arial helvetica sans-serif;");

var container0 = document.querySelector(".container0");
container0.setAttribute("style", "display: flex; flex-direction: column; align-items: center; justify-content: center");

var reset = document.querySelector("#reset_btn");
reset.setAttribute("style", "background: orange; color: black; font-weight: bold; padding: 10px; border: 4px solid black");

var container = document.querySelector(".container");
container.setAttribute("style", "width: 960px; height: 960px; display: flex; flex-direction: column; border: none;");

var container1 = document.querySelector(".container1");
container1.setAttribute("style", "display: flex; flex-direction: column; gap: 50px; margin-top: 50px;");

var dropdown_content = document.querySelector("#dropdown_content");
dropdown_content.setAttribute("style", "display: flex; flex-direction: column; visibility: hidden; ");

var dr_btn = document.querySelectorAll(".dr_btn").forEach(elem => elem.setAttribute("style", "width: 200px; padding:10px; background: orange; font-weight: bold; border: 3px solid black"));

var color_btn = document.querySelector("#dropdown_btn");

var type_btn = document.querySelector("#pen_type");
type_btn.style.visibility = "hidden";


var start = false;

var pen_color = "multicolor";
var pen_type = "solid";

var pd_count = Number(0);


reset.addEventListener("click", () => {
    // const test1 = Number("12.5");
    // alert(Number.isInteger(test1));
    var input = prompt("Please enter a board size between 1 to 100");
    //alert(input);
    var input_number = Number(input);
    var range_rule1 = input_number > 0;
    var range_rule2 = input_number < 101;
    var range_rule = range_rule1 && range_rule2;

    while (!(Number.isInteger(input_number) || range_rule)) {
        input = prompt("Please enter a board size between 1 to 100");
        input_number = Number(input);
        range_rule1 = input_number > 0;
        range_rule2 = input_number < 101;
        range_rule = range_rule1 && range_rule2;
    }

    if (Number.isInteger(input_number) && range_rule) {

        container.innerHTML = "";
        start = true;
        var vertical = "vertical";
        var horizontal = "horizontal";

        for (let i = 1; i <= input_number; i++) {
            window[vertical + i] = document.createElement("div");
            window[vertical + i].setAttribute("style", "border:none ; display: flex; height:100%; width: 100%;");
            container.appendChild(window[vertical + i]);

            for (let j = 1; j <= input_number; j++) {
                window[horizontal + j] = document.createElement("div");
                window[horizontal + j].setAttribute("style", "border:2px solid blue; height:100%; width: 100%; ");
                //window[horizontal + j].setAttribute("class", "paint");
                window[vertical + i].appendChild(window[horizontal + j]);
            }
        }
    }

    pd_count = 0;

});

container.addEventListener("mouseover", handler, false);

function handler(e) {
    //if (e.target.className = 'paint' && start) {
    if (e.target.nodeName = 'div' && start) {
        const node = e.target;
        // node.style.background = "green";
        if (pen_color === 'multicolor') {
            node.style.background = getMulticolor();
            pd_count = 0;
        }
        if (pen_color === 'black') {
            if (pen_type === "solid") {
                node.style.background = "black";
                pd_count = 0;
            }
            if (pen_type === "pd" && pd_count < 11) {
                let opacity_amount = pd_count * 10;
                let opacity = opacity_amount + "%";
                node.style.background = "black";
                node.style.opacity = opacity;
                pd_count++;
            } else {
                node.style.background = "black";
            }
        }
    }
}

function progressive_darkning(count) {
    switch (count) {
        case 1:
    }
}

color_btn.addEventListener("click", () => {
    dropdown_content.style.visibility = "visible";
});


dropdown_content.addEventListener("click", pick_color, false);

function pick_color(e) {
    if (e.target.nodeName = 'button') {
        pen_color = e.target.id;
        console.log(pen_color);
    }
    if (pen_color === 'black') {
        color_btn.innerHTML = "Pen Color: Black";
        type_btn.innerHTML = "Progressive darkning: OFF";
        type_btn.style.visibility = "visible";
    }
    if (pen_color === 'multicolor') {
        color_btn.innerHTML = "Pen Color: Multicolor";
        type_btn.style.visibility = "hidden";
    }
    pen_type = "solid";
    dropdown_content.style.visibility = "hidden";

}

type_btn.addEventListener("click", () => {
    console.log(type_btn.innerHTML);
    let current_status = type_btn.innerHTML;
    if (current_status === "Progressive darkning: OFF") {
        console.log("12345");
        current_status = "Progressive darkning: ON";
        pen_type = "pd";
    }
    else if (current_status === "Progressive darkning: ON") {
        console.log("678910");
        current_status = "Progressive darkning: OFF";
        pen_type = "solid";
    }
    type_btn.innerHTML = current_status;
});

function getMulticolor() {

    const color_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    const color1 = color_arr[getRandNumber()];
    const color2 = color_arr[getRandNumber()];
    const color3 = color_arr[getRandNumber()];
    const color4 = color_arr[getRandNumber()];
    const color5 = color_arr[getRandNumber()];
    const color6 = color_arr[getRandNumber()];

    const color = "#" + color1 + color2 + color3 + color4 + color5 + color6;
    return color;
}

function getRandNumber() {
    let rand = Math.random();
    const difference = 16 - 1;
    const random = Math.round(rand * difference);
    return random;
}