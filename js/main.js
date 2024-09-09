const images = ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"];
const type = ["SNOW DEAR", "SUNSET", "SNOW HOUSE", "PLANT", "SEA"];
let i = 0;

const thumbnails = document.querySelectorAll('.thumbnail .item img');


function showSlider() {
    document.getElementById("s1").src = "./img/" + images[i];
    document.getElementById("s2").innerText = type[i];
}

function right() {
    i = (i + 1) % images.length;
    showSlider();
}

function left() {
    i = (i - 1 + images.length) % images.length;
    showSlider();
}

// Thumbnail click event
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', (event) => {
        event.preventDefault();
        i = index; 
        showSlider();
    });
});

function starttimer() {
    setInterval(() => {
        right();
    }, 3000);
}


window.onload = function() {
    starttimer();
};
