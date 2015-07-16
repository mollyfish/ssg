'use strict';
$(function() {
  var toPop;
  var initialCaro = Math.floor((Math.random() * 6) + 1);
  var intervalID;

  function caroStart(num) {
    $('#box-' + num).removeClass('backup').addClass('diva');
    $('#caro-' + num).removeClass('backup').addClass('diva');
    $('#caro-' + num + '-link').removeClass('backup').addClass('diva');
    $('#pos' + num).addClass('diva');
  };

  function rotateRight(num) {
    var next = num + 1;
    if (next < 7) {
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

  if (initialCaro === 1) {
    caroStart(1);
  };
  if (initialCaro === 2) {
    caroStart(2);
  };
  if (initialCaro === 3) {
    caroStart(3);
  };
  if (initialCaro === 4) {
    caroStart(4);
  };
  if (initialCaro === 5) {
    caroStart(5);
  };
  if (initialCaro === 6) {
    caroStart(6);
  };

  function startRotation() {
    intervalID = window.setInterval(autoRotate, 6000);
  };
  function stopRotation() {
    clearInterval(intervalID);
    console.log('should stop');
  };
  // startRotation();

  $('#July-carousel').on('click', 'button#caro-right', function() {
    console.log('go right');
    toPop = $(this).siblings('.diva');
    console.log(toPop);
    if ($(toPop).attr('id') === 'box-1') {
      rotateRight(1);
    }
    if ($(toPop).attr('id') === 'box-2') {
      rotateRight(2);
    }
    if ($(toPop).attr('id') === 'box-3') {
      rotateRight(3);
    }
    if ($(toPop).attr('id') === 'box-4') {
      rotateRight(4);
    }
    if ($(toPop).attr('id') === 'box-5') {
      rotateRight(5);
    } 
    if ($(toPop).attr('id') === 'box-6') {
      rotateRight(6);
    }
    stopRotation();
  });

  $('#July-carousel').on('click', 'button#caro-left', function() {
    console.log('go left');
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'box-6') {
      rotateLeft(6);
    }
    if ($(toPop).attr('id') === 'box-5') {
      rotateLeft(5);
    }
    if ($(toPop).attr('id') === 'box-4') {
      rotateLeft(4);
    }
    if ($(toPop).attr('id') === 'box-3') {
      rotateLeft(3);
    }
    if ($(toPop).attr('id') === 'box-2') {
      rotateLeft(2);
    } 
    if ($(toPop).attr('id') === 'box-1') {
      rotateLeft(1);
    }
    stopRotation();
  });

  $('#July-carousel').on('click', 'div#pos1', function() {
    posChange(1);
    stopRotation();
  });
  $('#July-carousel').on('click', 'div#pos2', function() {
    posChange(2);
    stopRotation();
  });
  $('#July-carousel').on('click', 'div#pos3', function() {
    posChange(3);
    stopRotation();
  });
  $('#July-carousel').on('click', 'div#pos4', function() {
    posChange(4);
    stopRotation();
  });
  $('#July-carousel').on('click', 'div#pos5', function() {
    posChange(5);
    stopRotation();
  });
  $('#July-carousel').on('click', 'div#pos6', function() {
    posChange(6);
    stopRotation();
  });

  function autoRotate() {
    toPop = $('.box-link.diva');
    if ($(toPop).attr('id') === 'box-1') {
      rotateRight(1);
    }
    if ($(toPop).attr('id') === 'box-2') {
      rotateRight(2);
    }
    if ($(toPop).attr('id') === 'box-3') {
      rotateRight(3);
    }
    if ($(toPop).attr('id') === 'box-4') {
      rotateRight(4);
    }
    if ($(toPop).attr('id') === 'box-5') {
      rotateRight(5);
    } 
    if ($(toPop).attr('id') === 'box-6') {
      rotateRight(6);
    }
  };
});
