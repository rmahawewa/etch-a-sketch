var body = document.querySelector("body");
body.setAttribute("style", "display: flex; align-items: center; justify-content: space-evenly");

var container0 = document.querySelector(".container0");
body.setAttribute("style", "display: flex; align-items: center; justify-content: center");

var reset = document.querySelector("#reset_btn");
reset.setAttribute("style", "background: orange; color: white; font-weight: bold; font-family: arial helvetica sans-serif; border: none; padding: 10px; margin-right: 200px; ");

var container = document.querySelector(".container");
container.setAttribute("style", "width: 960px; height: 960px; display: flex; flex-direction: column; border: none;");

var start = false;

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
                window[horizontal + j].setAttribute("class", "paint");
                window[vertical + i].appendChild(window[horizontal + j]);
            }
        }
    }



});

container.addEventListener("mouseover", handler, false);

function handler(e) {
    if (e.target.className = 'paint' && start) {
        const node = e.target;
        node.style.background = "green";
    }
}