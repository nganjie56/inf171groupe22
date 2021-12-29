var counter = 1;
var counter1 = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;

    }
}, 5000);

setInterval(function () {
    document.getElementById('radio2' + counter1).checked = true;
    counter1++;
    if (counter1 > 5) {
        counter1 = 1;


    }
}, 5000);