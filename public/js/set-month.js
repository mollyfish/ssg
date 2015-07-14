'use strict';
$(function() {
  var d = new Date();

  var dayName;
  var monthName;
  var numericDate;
  var numericMonth;
  var numericYear;

function getDayName() {
  if (d.getDay() === 0) {
    dayName = "Sunday";
  }
  if (d.getDay() === 1) {
    dayName = "Monday";
  }
  if (d.getDay() === 2) {
    dayName = "Tuesday";
  }
  if (d.getDay() === 3) {
    dayName = "Wednesday";
  }
  if (d.getDay() === 4) {
    dayName = "Thursday";
  }
  if (d.getDay() === 5) {
    dayName = "Friday";
  }
  if (d.getDay() === 6) {
    dayName = "Saturday";
  }
};

function getMonthName() {
  if (d.getMonth() + 1 === 1) {
    monthName = "January";
    numericMonth = 1;
  }
  if (d.getMonth() + 1 === 2) {
    monthName = "February";
    numericMonth = 2;
  }
  if (d.getMonth() + 1 === 3) {
    monthName = "March";
    numericMonth = 3;
  }
  if (d.getMonth() + 1 === 4) {
    monthName = "April";
    numericMonth = 4;
  }
  if (d.getMonth() + 1 === 5) {
    monthName = "May";
    numericMonth = 5;
  }
  if (d.getMonth() + 1 === 6) {
    monthName = "June";
    numericMonth = 6;
  }
  if (d.getMonth() + 1 === 7) {
    monthName = "July";
    numericMonth = 7;
  }
  if (d.getMonth() + 1 === 8) {
    monthName = "August";
    numericMonth = 8;
  }
  if (d.getMonth() + 1 === 9) {
    monthName = "September";
    numericMonth = 9;
  }
  if (d.getMonth() + 1 === 10) {
    monthName = "October";
    numericMonth = 10;
  }
  if (d.getMonth() + 1 === 11) {
    monthName = "November";
    numericMonth = 11;
  }
  if (d.getMonth() + 1 === 12) {
    monthName = "December";
    numericMonth = 12;
  }
}

function getNumericDate() {
  numericDate = d.getDate();
}

function getNumericYear() {
  numericYear = d.getFullYear();
}

$('#display').on('click', function() {
  displayDate();
});

function displayDate() {
  getDayName();
  getMonthName();
  getNumericDate();
  getNumericYear();
  $('#current-day-name').text(dayName);
  $('#current-month-name').text(monthName);
  $('#current-numeric-date').text(numericDate);
  $('#current-year').text(numericYear);
  $('#short-date').text(numericMonth + '/' + numericDate + '/' + numericYear);
}

function displayMonthName() {
  getMonthName();
  $('.current-month-name').text(monthName);
  $('title').text('SSG :: ' + monthName);
  var tabs = $('div.month');
  $(tabs).each(function(i) {
    if ($(tabs[i]).text() === monthName) {
      $(this).addClass('current');
    } else {
      $(this).removeClass('current');
    }
  });
  var carousel = $('.carousel');
  $(carousel).each(function(i) {
    if (($(this).attr('id')) === (monthName + '-carousel')) {
      $(this).removeClass('not-shown')
    } else {
      $(this).addClass('not-shown')
    }
  })
  var featured = $('.featured');
  console.log(featured);
  $(featured).each(function(i) {
    if (($(this).attr('id')) === (monthName + '-featured')) {
      $(this).removeClass('not-shown')
    } else {
      $(this).addClass('not-shown')
    }
  })
}
displayMonthName();

});