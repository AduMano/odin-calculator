window.onload = () => {
    /// Initialize Variables
    let operandOne = "";
    let operator = "";
    let operandTwo = "";
    let input = "";

    // Get the parent of the button
    let keys = document.querySelector(".keys");

    /// State
    let theresDot = false;
    let pressing = false;

    /// Functions
    const getinput = (value, type) => {
        switch(type) {
            case "number" :

            break;
            case "operator" :

            break;
            case "dot" :

            break;
            case "backspace" :

            break;
            case "equal" :

            break;
            case "clear" :

            break;
        }
    }

    /// Events
    keys.addEventListener("click", (e) => {
        let elem = e.target;

        if (elem.getAttribute("data-type") !== null) {
            getinput(elem.getAttribute("data-value"), elem.getAttribute("data-type"));
        }
    });

    // Keyboard Support
    document.addEventListener("keydown", (e) => {

    });
    document.addEventListener("keyup", (e) => {

    });
}