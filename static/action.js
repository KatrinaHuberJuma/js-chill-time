"use strict";

console.log("js is still connect?");


// $('.fancy-text').addClass("welcome-msg")
// this selects elements with class fancy-text and add welcome-msg class
// $('#bisque-button').on('click', () => { 
//     alert("wut?")
// })


$('#bisque-button').on('click', () => { 
    alert("button clicked");
    $.get('/get_style/api', (res) => {
        $('.fancy-text').addClass(res);
    })
})


