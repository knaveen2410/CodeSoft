const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

var monthName = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = d + " " + monthName[m] + " " + y;
    hour.innerHTML = String(h).padStart(2, '0');
    minute.innerHTML = String(min).padStart(2, '0');
    second.innerHTML = String(sec).padStart(2, '0');
}, 1000);