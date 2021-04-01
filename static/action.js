"use strict";

console.log("js is connect");

// $('.fancy-text').addClass("welcome-msg")
// this selects elements with class fancy-text and add welcome-msg class

// $('#bisque-button').on('click', () => { 
//     alert("the button was clicked")
// })

$.get('/get_style/api', (res) => {
    alert(res)
})
