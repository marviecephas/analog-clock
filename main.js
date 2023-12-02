let second = 0;
let minute = 0;
let hour = 0;
let time = new Date();

setInterval (
    function() {
        time = new Date()
        minute = time.getMinutes() * 6;
        second = time.getSeconds() * 6;
        hour = time.getHours() * 30;
        document.querySelector('.minute_hand_wrapper').style.transform = "rotate(" + minute + "deg)";
        document.querySelector('.second_hand_wrapper').style.transform = "rotate(" + second + "deg)";
        document.querySelector('.hour_hand_wrapper').style.transform = "rotate(" + hour + "deg)";
    },1000
)

console.log(Date())

