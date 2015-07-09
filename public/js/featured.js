'use strict';
$(function() {
  var toPop;
  var initialCaro = Math.floor((Math.random() * 6) + 1);
  var intervalID;

  function caroStart(num) {
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
    } else {
      next = 1;
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('#caro-' + num).removeClass('diva').addClass('backup');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
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
    } else {
      next = 6;
      $('#caro-' + next).removeClass('backup').addClass('diva');
      $('#caro-' + num).removeClass('diva').addClass('backup');
      $('.caro-link.diva').removeClass('diva');
      $('#caro-' + next + '-link').removeClass('backup').addClass('diva');
      $('#pos' + num).removeClass('diva');
      $('#pos' + next).addClass('diva');
    }
  };

  function posChange(num) {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $('.caro-link.diva').removeClass('diva');
    $('#caro-' + num + '-link').removeClass('backup').addClass('diva');
    $('div#pos' + num).addClass('diva');
    $('#caro-' + num).removeClass('backup').addClass('diva');
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
  startRotation();

  $('#carousel').on('click', 'button#caro-right', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-1') {
      rotateRight(1);
    }
    if ($(toPop).attr('id') === 'caro-2') {
      rotateRight(2);
    }
    if ($(toPop).attr('id') === 'caro-3') {
      rotateRight(3);
    }
    if ($(toPop).attr('id') === 'caro-4') {
      rotateRight(4);
    }
    if ($(toPop).attr('id') === 'caro-5') {
      rotateRight(5);
    } 
    if ($(toPop).attr('id') === 'caro-6') {
      rotateRight(6);
    }
    stopRotation();
  });

  $('#carousel').on('click', 'button#caro-left', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-6') {
      rotateLeft(6);
    }
    if ($(toPop).attr('id') === 'caro-5') {
      rotateLeft(5);
    }
    if ($(toPop).attr('id') === 'caro-4') {
      rotateLeft(4);
    }
    if ($(toPop).attr('id') === 'caro-3') {
      rotateLeft(3);
    }
    if ($(toPop).attr('id') === 'caro-2') {
      rotateLeft(2);
    } 
    if ($(toPop).attr('id') === 'caro-1') {
      rotateLeft(1);
    }
    stopRotation();
  });

  $('#carousel').on('click', 'div#pos1', function() {
    posChange(1);
    stopRotation();
  });
  $('#carousel').on('click', 'div#pos2', function() {
    posChange(2);
    stopRotation();
  });
  $('#carousel').on('click', 'div#pos3', function() {
    posChange(3);
    stopRotation();
  });
  $('#carousel').on('click', 'div#pos4', function() {
    posChange(4);
    stopRotation();
  });
  $('#carousel').on('click', 'div#pos5', function() {
    posChange(5);
    stopRotation();
  });
  $('#carousel').on('click', 'div#pos6', function() {
    posChange(6);
    stopRotation();
  });

  function autoRotate() {
    toPop = $('.caro-item.diva');
    if ($(toPop).attr('id') === 'caro-1') {
      rotateRight(1);
    }
    if ($(toPop).attr('id') === 'caro-2') {
      rotateRight(2);
    }
    if ($(toPop).attr('id') === 'caro-3') {
      rotateRight(3);
    }
    if ($(toPop).attr('id') === 'caro-4') {
      rotateRight(4);
    }
    if ($(toPop).attr('id') === 'caro-5') {
      rotateRight(5);
    } 
    if ($(toPop).attr('id') === 'caro-6') {
      rotateRight(6);
    }
  };
  // function startRotation() {
  //   intervalID = window.setInterval(autoRotate, 6000);
  // };
  // function stopRotation() {
  //   clearInterval(intervalID);
  // };
  // startRotation();
});
