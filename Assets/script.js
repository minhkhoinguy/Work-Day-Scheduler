//display time
var time = moment().format('LLL');
$("#currentDay").text(time);


//locally stored data
var saveBtn = document.querySelectorAll('.saveBtn');

let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
saveBtn.forEach(function (saves) {
    saves.addEventListener('click', function (event) {
        let row = event.target.parentNode
        let myContent = row.querySelector('.description').value;
        let hour = row.querySelector('.hour').textContent;
        schedule.push({myContent,hour});
        localStorage.setItem('schedule', JSON.stringify(schedule));
    })
})
