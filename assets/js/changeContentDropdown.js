// Script to hide and show content based on drop down selection, taken from https://stackoverflow.com/questions/12684677/how-to-hide-and-show-content-based-on-drop-down-selection

document.getElementById('options').onchange = function () {
    var i = 1;
    var myDiv = document.getElementById(i);
    while (myDiv) {
        myDiv.style.display = 'none';
        myDiv = document.getElementById(++i);
    }
    document.getElementById(this.value).style.display = 'block';
};