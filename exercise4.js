// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue.

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!

function superFuncy(input) {
    if (input.outerHTML.includes("green")) { input.style.backgroundColor = "green" }
    else if (input.outerHTML.includes("red")) { input.style.backgroundColor = "red" }
    else if (input.outerHTML.includes("blue")) { input.style.backgroundColor = "blue" }
}

//i tried way too hard making this the way i did