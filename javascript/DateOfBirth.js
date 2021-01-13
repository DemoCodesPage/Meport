function DateOfBirth() {
    var now = new Date();
    var birthDay = new Date(1999, 6, 29, 00, 00, 00);
    // var nextDate = new Date(now.getFullYear()+1, 6, 29, 00, 00, 00);
    var lastDate = new Date(now.getFullYear(), 6, 29, 00, 00, 00);
    // var distance = nextDate.getTime() - now.getTime(); //Countdown
    var distance = now.getTime() - lastDate.getTime();
    var age = now.getTime() - birthDay.getTime();

    var years = Math.round(age / (1000 * 60 * 60 * 24 * 365))
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    years = CheckTime(years);
    days = CheckTime(days);
    hours = CheckTime(hours);
    minutes = CheckTime(minutes);
    seconds = CheckTime(seconds);
    document.querySelector(".years").innerHTML = '(' + years + ')';
    document.querySelector(".age").innerHTML = 
    days + ' Days <b>(' + hours + 'h:' + minutes + 'm:' + seconds + 's)</b>';
    
}
setInterval(DateOfBirth, 1000);

function CheckTime(i) {
    if (i < 10) { i = "0" + i }
    return i;
}