'use strict';
$(function() {
  var toPop;
  function scrollR() {

  };

  $('#carousel').on('click', 'button#caro-right', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-1') {
      $('#caro-2').removeClass('backup').addClass('diva');
      $('#caro-1').removeClass('diva').addClass('backup');
      $('#pos1').removeClass('diva');
      $('#pos2').addClass('diva');
    }
    if ($(toPop).attr('id') === 'caro-2') {
      $('#caro-3').removeClass('backup').addClass('diva');
      $('#caro-2').removeClass('diva').addClass('backup');
      $('#pos2').removeClass('diva');
      $('#pos3').addClass('diva');
    }
    if ($(toPop).attr('id') === 'caro-3') {
      $('#caro-4').removeClass('backup').addClass('diva');
      $('#caro-3').removeClass('diva').addClass('backup');
      $('#pos3').removeClass('diva');
      $('#pos4').addClass('diva');
    }
    if ($(toPop).attr('id') === 'caro-4') {
      $('#caro-5').removeClass('backup').addClass('diva');
      $('#caro-4').removeClass('diva').addClass('backup');
      $('#pos4').removeClass('diva');
      $('#pos5').addClass('diva');
    }
    if ($(toPop).attr('id') === 'caro-5') {
      $('#caro-6').removeClass('backup').addClass('diva');
      $('#caro-5').removeClass('diva').addClass('backup');
      $('#pos5').removeClass('diva');
      $('#pos6').addClass('diva');
    } 
    if ($(toPop).attr('id') === 'caro-6') {
      $('#caro-1').removeClass('backup').addClass('diva');
      $('#caro-6').removeClass('diva').addClass('backup');
      $('#pos6').removeClass('diva');
      $('#pos1').addClass('diva');
    }
  });

  $('#carousel').on('click', 'button#caro-left', function() {
    toPop = $(this).siblings('.diva');
    if ($(toPop).attr('id') === 'caro-6') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
      $('#pos6').removeClass('diva');
      $('#pos5').addClass('diva');
    } else if ($(toPop).attr('id') === 'caro-5') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
      $('#pos5').removeClass('diva');
      $('#pos4').addClass('diva');
    } else if ($(toPop).attr('id') === 'caro-4') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
      $('#pos4').removeClass('diva');
      $('#pos3').addClass('diva');
    } else if ($(toPop).attr('id') === 'caro-3') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
      $('#pos3').removeClass('diva');
      $('#pos2').addClass('diva');
    } else if ($(toPop).attr('id') === 'caro-2') {
      $(toPop).prev().removeClass('backup').addClass('diva');
      $(toPop).removeClass('diva').addClass('backup');
      $('#pos2').removeClass('diva');
      $('#pos1').addClass('diva');
    } else {
      $(this).siblings('#caro-6').removeClass('backup').addClass('diva');
      $(this).siblings('#caro-1').removeClass('diva').addClass('backup');
      $('#pos1').removeClass('diva');
      $('#pos6').addClass('diva');
    }
  });

  $('#carousel').on('click', 'div#pos1', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-1').removeClass('backup').addClass('diva');
  });
  $('#carousel').on('click', 'div#pos2', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-2').removeClass('backup').addClass('diva');
  });
  $('#carousel').on('click', 'div#pos3', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-3').removeClass('backup').addClass('diva');
  });
  $('#carousel').on('click', 'div#pos4', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-4').removeClass('backup').addClass('diva');
  });
  $('#carousel').on('click', 'div#pos5', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-5').removeClass('backup').addClass('diva');
  });
  $('#carousel').on('click', 'div#pos6', function() {
    $('.caro-item.diva').addClass('backup').removeClass('diva');
    $('.pos.diva').removeClass('diva');
    $(this).addClass('diva');
    $('#caro-6').removeClass('backup').addClass('diva');
  });
  

});

