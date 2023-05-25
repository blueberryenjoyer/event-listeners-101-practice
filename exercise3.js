// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
// 1) An event listener that, when the element is clicked, will turn the background color to green.
// 2) An event listener that, when the element is double-clicked, will turn the background color to blue. 
let cell1 = document.getElementById("cell-one")
let cell2 = document.getElementById("cell-two")
let cell3 = document.getElementById("cell-three")
function cellone() {
    cell1.style.backgroundColor = "green"
}
function cellone2() {
    cell1.style.backgroundColor = "blue"
}

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
// 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border.
// 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.
function celltwo() {
    cell2.style.border = "2px solid green"
}
function celltwo2() {
    cell2.style.border = "2px solid black"
}


// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
// 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
// 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

function cellthree() {
    cell3.innerHTML = "dont click on me!"
}
function cellthree1() {
    cell3.innerHTML = "you think youre safe? you think this box confines me? i will find you, i will capture you, and no box will ever be rightclicked again"
}