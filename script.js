//when the DOM content finish loading Get an element by id="currentTime" and set the value to the current time in utc format (HH:MM:SS) set a timer to update the value every second
document.addEventListener('DOMContentLoaded', function() {
    var currentTime = document.getElementById('currentTime');
    currentTime.textContent = new Date().toUTCString().split(' ')[4];
    setInterval(function() {
        currentTime.textContent = new Date().toUTCString().split(' ')[4];
    }, 1000);

    //Get an element by id="currentDate" and set the value to the current date in utc format (DD/MM/YYYY) and the day of the week e.g Monday or Tuesday. update the value every second if the date changes
    var currentDate = document.getElementById('currentDay');
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    currentDate.textContent = date.toUTCString().split(' ').slice(1, 4).join(' ') + ' ' + days[date.getUTCDay()];
    setInterval(function() {
        var newDate = new Date();
        if (newDate.getUTCDate() !== date.getUTCDate()) {
            date = newDate;
            currentDate.textContent = date.toUTCString().split(' ').slice(1, 4).join(' ') + ' ' + days[date.getUTCDay()];
        }
    }, 1000);

});
