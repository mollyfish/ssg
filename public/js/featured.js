'use strict';
$(function() {
  var toPop;
  var caroItems = $('.box-link');
  var initialCaro = Math.floor((Math.random() * caroItems.length) + 1);
  var intervalID;

  function caroStart(num) {
    $('#box-' + num).removeClass('backup').addClass('diva');
    $('#caro-' + num).removeClass('backup').addClass('diva');
    $('#caro-' + num + '-link').removeClass('backup').addClass('diva');
    $('#pos' + num).addClass('diva');
    applyStyles();
  };

  function rotateRight(num) {
    var next = num + 1;
    if (next < (caroItems.length + 1)) {
      $('.caro-item.diva').removeClass('diva').addClass('backup');
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
      $('.box-link.diva').removeClass('diva').addClass('backup');
      $('#box-' + next).removeClass('backup').addClass('diva');
    } else {
      next = 1;
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('#caro-' + num).removeClass('diva').addClass('backup');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
      $('.box-link.diva').removeClass('diva').addClass('backup');
      $('#box-' + next).removeClass('backup').addClass('diva');
    }
  };

  function rotateLeft(num) {
    var next = num - 1;
    if (next > 0) {
      $('.caro-item.diva').removeClass('diva').addClass('backup');
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
      $('.box-link.diva').removeClass('diva').addClass('backup');
      $('#box-' + next).removeClass('backup').addClass('diva');
    } else {
      next = 6;
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('#caro-' + num).removeClass('diva').addClass('backup');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
      $('.box-link.diva').removeClass('diva').addClass('backup');
      $('#box-' + next).removeClass('backup').addClass('diva');
    }
  };

  function posChange(num) {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.box-link.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $('.caro-link.diva').removeClass('diva');
    $('#caro-' + num + '-link').removeClass('backup').addClass('diva');
    $('div#pos' + num).addClass('diva');
    $('#caro-' + num).removeClass('backup').addClass('diva');
    $('#box-' + num).removeClass('backup').addClass('diva');
  };

  function autoRotate() {
    toPop = $('.box-link.diva');
    var numToPop = parseInt(($(toPop).attr('id')).slice(4));
    rotateRight(numToPop);
  };

  function startRotation() {
    intervalID = window.setInterval(autoRotate, 6000);
  };

  function stopRotation() {
    clearInterval(intervalID);
  };

  function applyStyles() {
    var wrapper = $('#pos-wrapper');
    var dots = $('.pos');
    $(wrapper).css('width', ((dots.length) * 35) - 13);
    // 35 is dot width plus margin-left, -13 is to remove margin-left width for last dot
    $(dots).each(function(i) {
      $('.pos').css('margin-left', function(i) {
      return i * 35;
      //looks like only 15 b/c dot width is 20
      });
    });
    $('.pos').addClass('position-dot');
  }

  $('#July-carousel').on('click', 'button#caro-right', function() {
    toPop = $(this).siblings('.diva');
    var numToPop = parseInt(($(toPop).attr('id')).slice(4));
    rotateRight(numToPop);
    stopRotation();
  });

  $('#July-carousel').on('click', 'button#caro-left', function() {
    toPop = $(this).siblings('.diva');
    var numToPop = parseInt(($(toPop).attr('id')).slice(4));
    rotateLeft(numToPop);
    stopRotation();
  });

  $('#July-carousel').on('click', 'div.pos', function() {
    var num = parseInt(($(this).attr('id')).slice(3));
    posChange(num);
    stopRotation();
  });

  caroStart(initialCaro);
  startRotation();
});
