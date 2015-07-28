'use strict';
$(function() {
  var map = $('#map-box img');
  $('#sji').on('mouseover', function() {
    $('#map').attr('src', '../images/SOUND-map-sanjuans.jpg');
  })
  $('#central').on('mouseover', function() {
    $('#map').attr('src', '../images/SOUND-map-csound.jpg');
  })
  $('#south').on('mouseover', function() {
    $('#map').attr('src', '../images/SOUND-map-ssound.jpg');
  })
  $('#kitsap').on('mouseover', function() {
    $('#map').attr('src', '../images/SOUND-map-kitsap.jpg');
  })
  $('.regions').on('mouseout', function() {
    $('#map').attr('src', '../images/SOUND-map.jpg');
  })
});