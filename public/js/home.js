'use strict';
$(function() {
  var toPop;

  $('#carousel').on('click', 'button#caro-right', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-1') {
      $(toPop).next().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-2') {
      $(toPop).next().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-3') {
      $(toPop).next().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-4') {
      $(toPop).next().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-5') {
      $(toPop).next().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else {
      $(this).siblings('#caro-1').removeClass('backup').addClass('diva');
      $(this).siblings('#caro-6').removeClass('diva').addClass('backup');
    }
    
  });

  $('#carousel').on('click', 'button#caro-left', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-6') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-5') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-4') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-3') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else if ($(toPop).attr('id') === 'caro-2') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
    } else {
      $(this).siblings('#caro-6').removeClass('backup').addClass('diva');
      $(this).siblings('#caro-1').removeClass('diva').addClass('backup');
    }
  });

  $('#carousel').on('click', 'div.caro-item', function() {
    // $('#caro-1').toggleClass('animate');
  });
  

});

