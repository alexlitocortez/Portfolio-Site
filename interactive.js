
const btn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu-two');
const spanOne = document.getElementById('line top');
const spanTwo = document.getElementById('line middle');
const spanThree = document.getElementById('line bottom');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    click();
})

function click() {
    spanOne.style.transform = "rotate(45deg)";
    spanTwo.style.transform = "translateX(500px)";
    spanThree.style.transform = "rotate(-45deg)";
}



// 1. Create an if/else function for when button is clicked or not
// 2. Insert it into the addevent listener function


