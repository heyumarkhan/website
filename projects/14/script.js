"use strict";

const calAgeButton = document.getElementById('calculate-button');
const showAge = document.getElementById('show-age');

let age, years, months, days;
age = years = months = days = null;
let fromDate = null;
const toDate = new Date ();

fromDate = datepicker('#date-picker',  {
    // customizable options
    startDay: 1,
    maxDate: new Date(), // disable past dates
    onSelect: (_,date) => { // we use instance 'instance' as it gives us whole date pickter object
        fromDate = date;
    }
});

calAgeButton.addEventListener('click', () => {
   let diff = getDateDifference(fromDate, toDate);
   showAge.innerHTML = `You are <strong> ${years} years, ${months} months, ${days} days </strong> old`;
});

function getDateDifference (fromDate, toDate) {
    years = toDate.getFullYear() - fromDate.getFullYear();
    months = toDate.getMonth() - fromDate.getMonth();
    days = toDate.getDate() - fromDate.getDate();

    if (days < 0){
        months--;
        const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months <0){
        months += 12;
        years--;
    }
    return {years, months, days}
};