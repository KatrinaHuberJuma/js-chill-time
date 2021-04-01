"use strict";

console.log("js is still connect?");


// $('.fancy-text').addClass("welcome-msg")
// this selects elements with class fancy-text and add welcome-msg class
// $('#bisque-button').on('click', () => { 
//     alert("wut?")
// })

// const formData = { username: $("#username").val()} 
// how to get the value from the input in our html
// $.post("/post_name", {username:"this is hardcoded in my console"}, (res) => {
//     alert(res);
// })

// user's name from the input
// $("#username").val();

$("#name-form").on('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);
    const username = $("#username").val();
    console.log(username);
    $.post('/post_name', {cupcakes: username}, (res) => {
        console.log(res);
    })
})

$('#bisque-button').on('click', () => { 
    // alert("button clicked");
    $.get('/get_style/api', (res) => {
        // using the .fancy-text class to select elements on our page to add styles
        $('.fancy-text').addClass(res);
        // res is a string that is a classname (such as "green-bg")
        // so line 18 would read
        // $('.fancy-text').addClass("green-bg");
    })
})


