//display time
var time = moment().format('LLL');
$("#currentDay").text(time);

// we want a function to run whenever we go to the page
// that checks local storage for a value
// and put's that value in the correct time-block

var description = document.querySelectorAll('.description')

function getSchedule() {
    description.forEach(function(element) {
        let val = localStorage.getItem(JSON.stringify(element.id))
        if(val) {
            element.textContent = val.replace(/["]+/g, '');
        }
    })
}

getSchedule()


//locally stored data
var saveBtn = document.querySelectorAll('.saveBtn');

saveBtn.forEach(function (saves) {
    saves.addEventListener('click', function (event) {
        let row = event.target.parentNode
        let myContent = row.querySelector('.description').value;
        let id = row.querySelector('.description').id;
        localStorage.setItem(JSON.stringify(id), JSON.stringify(myContent));
    })
})
