'use strict';
$(function() {
  var caroCounter = 2;

  $('#carousel').on('click', 'button#caro-right', function() {
    console.log($(this));
  });

  $('#carousel').on('click', 'button#caro-left', function() {
    console.log($(this));
  });

  $('#carousel').on('click', 'div.caro-item', function() {

    var popped = $(this).html;
    console.log(popped);

  });
  

});

