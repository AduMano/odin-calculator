window.onload = () => {
    /// Initialize Variables
    let operandOne = "0";
    let operator = "";
    let operandTwo = "";

    // Get HTML elements
    let keys = document.querySelector(".keys");
    let mainDisplay = document.querySelector(".mainDisplay");
    let secondaryDisplay = document.querySelector(".secondaryDisplay");

    /// Functions
    const updateScreen = () => {
        mainDisplay.innerText = operandOne;
        secondaryDisplay.innerText = operandTwo;
    }

    const calculate = () => {
        let result = 0;
        // Regex /^[0-9,]/g means Select all those characters that are not
        // part of the set, which is 0 - 9, - and a dot. Those that are selected
        // will be replaced by a "" or empty string, leaving only those characters
        // that are 0 - 9, dot or -.
        let num1 = parseFloat(operandTwo.replace(/[^0-9.-]/g, ''));
        let num2 = parseFloat(operandOne);

        switch(operator) {
            case "add" :
                result = num1 + num2;
            break;
            case "subtract" :
                result = num1 - num2;
            break;
            case "multiply" :
                result = num1 * num2;
            break;
            case "divide" :
                result = num1 / num2;

                (isNaN(result)) ? result = 0 : result = result;
            break;
        }
        
        // Reset operand 2 and operator
        operandTwo = "";
        operator = "";
        return (Math.round(result * 10) / 10).toString();
    }

    const getInput = (value, type) => {
        switch(type) {
            case "number" :
                if (operandOne === "0" || operandOne === "Infinity") {
                    operandOne = value;
                    updateScreen();

                    return;
                }

                operandOne += value;

                updateScreen();
            break;
            case "operator" :
                let operators = {
                    "add": " + ",
                    "subtract": " - ",
                    "multiply": " ⨯ ",
                    "divide": " ÷ "
                };

                if (operandOne === "0" || operandOne === "Infinity") return;
                else if (operandOne !== "0" && operandTwo !== "") {
                    // This means if theres already an existing
                    // operation, this will immediately calculate
                    // The existing operation.

                    operandTwo = calculate() + operators[value];
                    operandOne = "0";

                    updateScreen();

                    operator = value;
                    return;

                }

                // Set Operator
                operator = value;

                // Send the operandOne to operandTwo
                operandTwo = operandOne + operators[value];

                // Set operandOne back to 0
                operandOne = "0";

                updateScreen();
            break;
            case "dot" :
                if (operandOne.includes(".")) return;
                else if (operandOne === "Infinity") return;
                operandOne += value;

                updateScreen();
            break;
            case "backspace" :
                if (operandOne == "0") return;
                else if (operandOne === "Infinity") {
                    operandOne = "0";

                    updateScreen();
                    return;
                }
                let temp = operandOne.substring(0, operandOne.length - 1);
                
                // Remove last number
                operandOne = temp;

                // Check if operandOne is empty
                if (operandOne.length === 0) operandOne = "0";

                updateScreen();
            break;
            case "equal" :
                if (operandTwo === "" && operator === "") return;

                operandOne = calculate();

                updateScreen();
            break;
            case "clear" :
                operandOne = "0";
                operandTwo = "";
                operator = "";

                updateScreen();
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
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let operators = ["+", "-", "*", "/"];
    let keyCode = ["Enter", "Backspace", "Escape"];

    document.addEventListener("keydown", (e) => {
        // Disable Tab Indexing
        if (e.key === "Tab") {
            e.preventDefault();
        }

        if (e.key === ".") {
            getInput(".", "dot");
            document.querySelector(`button[data-value="${e.key}"]`).classList.add("active");
        }
        else if (numbers.includes(e.key)) {
            getInput(e.key, "number");
            document.querySelector(`button[data-value="${e.key}"]`).classList.add("active");
        }
        else if (operators.includes(e.key)) {
            let operatorList = {
                "+": "add", 
                "-": "subtract",
                "*": "multiply",
                "/": "divide"
            };

            getInput(operatorList[e.key], "operator");
            document.querySelector(`button[data-value="${operatorList[e.key]}"]`).classList.add("active");
            }
        else if (keyCode.includes(e.key)) {
            let keysList = {
                "Escape": "clear",
                "Backspace": "backspace",
                "Enter": "equal"
            };
            
            getInput("", keysList[e.key]);
            document.querySelector(`button[data-type="${keysList[e.key]}"]`).classList.add("active");
        }
    });
    document.addEventListener("keyup", (e) => {
        if (e.key === "." || numbers.includes(e.key)) {
            document.querySelector(`button[data-value="${e.key}"]`).classList.remove("active");
        }
        else if (operators.includes(e.key)) {
            let operatorList = {
                "+": "add", 
                "-": "subtract",
                "*": "multiply",
                "/": "divide"
            };

            document.querySelector(`button[data-value="${operatorList[e.key]}"]`).classList.remove("active");
        }
        else if (keyCode.includes(e.key)) {
            let keysList = {
                "Escape": "clear",
                "Backspace": "backspace",
                "Enter": "equal"
            };

            document.querySelector(`button[data-type="${keysList[e.key]}"]`).classList.remove("active");
        }
    });
}