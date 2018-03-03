/* eslint-disable no-console */

var button = document.getElementsByClassName('button');
console.log(button);

for ( var i = 0 ; i < button.length ; i++ ) {
    console.log(button[i].innerText);
}
