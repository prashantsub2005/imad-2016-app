console.log('Loaded!');
// Change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('vulture');
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};