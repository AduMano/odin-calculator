window.onload = () => {
    /// Initialize Variables
    let operandOne = "";
    let operator = "";
    let operandTwo = "";
    let input = "";
    let timer = null;

    // Get the parent of the button
    let keys = document.querySelector(".keys");

    /// State
    let theresDot = false;
    let pressing = false;

    /// Functions
    const getInput = (value, type) => {
        switch(type) {
            case "number" :
                console.log(value);
            break;
            case "operator" :
                console.log(value);
            break;
            case "dot" :
                console.log(value);
            break;
            case "backspace" :
                console.log(type);
            break;
            case "equal" :
                console.log(type);
            break;
            case "clear" :
                console.log(type);
            break;
        }
    }

    /// Events
    keys.addEventListener("click", (e) => {
        let elem = e.target;

        if (elem.getAttribute("data-type") !== null) {
            getInput(elem.getAttribute("data-value"), elem.getAttribute("data-type"));
        }
    });

    // Keyboard Support
    document.addEventListener("keydown", (e) => {
        let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let operators = ["+", "-", "*", "/"];
        let keys = ["Enter", "Backspace", "Escape"];

        if (e.key === ".") {
            getInput(".", "dot");
        }
        else if (numbers.includes(e.key)) {
            getInput(e.key, "number");
        }
        else if (operators.includes(e.key)) {
            let operatorList = {
                "+": "add", 
                "-": "subtract",
                "*": "multiply",
                "/": "divide"
            };

            getInput(operatorList[e.key], "operator");
        }
        else if (keys.includes(e.key)) {
            let keysList = {
                "Escape": "clear",
                "Backspace": "backspace",
                "Enter": "equal"
            };

            getInput("", keysList[e.key]);
        }
    });
}