const numcheck = document.getElementById("numcheck");
const msgshow = document.getElementById("msg-show");

// Eventlistener adding to input
numcheck.addEventListener("keyup", function () {
    let numInput = parseInt(numcheck.value);

    // if input is NaN , or "" and not 0
    if ((!numInput && numInput !==0) || isNaN(numInput)) {
        msgshow.textContent = "";
    // there is input
    } else if (numInput) {
        // if input less than 0
        if (numInput < 0) {
            msgshow.textContent = "please enter a positive number";
        // checking input is even
        } else if ((numInput % 2) === 0) {
            msgshow.textContent = `${numInput + 2}, ${numInput + 4}, ${numInput + 6}`;
        // checking input is odd
        } else if ((numInput% 2) !== 0) {
            msgshow.textContent = `${numInput + 2}, ${numInput + 4}, ${numInput + 6}`;
        }
    // incase input is zero
    } else {
        msgshow.textContent = `entered value is 0, next three odd numbers are ${numInput + 1}, ${numInput + 3}, ${numInput + 5}, and the next 3 even numbers are ${numInput + 2}, ${numInput + 4}, ${numInput + 6}`;
    
    }

});


