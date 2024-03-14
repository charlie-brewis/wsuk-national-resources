//Put your code here

const canvas = document.getElementById('img-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "img/athena.jpg";

img.onload = function() {
    //TODO: figure out better resizing
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};