"use strict";
$(function(){

  $('#main-tab-when').on('click', function() {

    $('#drop-tab-when').attr('class', 'drop-tab real-box');
    $('#drop-tab-where').attr('class', 'drop-tab ghost-box');
    $('#drop-tab-what').attr('class', 'drop-tab ghost-box');

    $('#main-tab-when').removeClass('sleeping-tab').addClass('current-tab');
    $('#main-tab-where').removeClass('current-tab').addClass('sleeping-tab');
    $('#main-tab-what').removeClass('current-tab').addClass('sleeping-tab');

  });

  $('#main-tab-where').on('click', function() {
    $('#drop-tab-where').attr('class', 'drop-tab real-box');
    $('#drop-tab-when').attr('class', 'drop-tab ghost-box');
    $('#drop-tab-what').attr('class', 'drop-tab ghost-box');

    $('#main-tab-where').removeClass('sleeping-tab').addClass('current-tab');
    $('#main-tab-when').removeClass('current-tab').addClass('sleeping-tab');
    $('#main-tab-what').removeClass('current-tab').addClass('sleeping-tab');

  });

  $('#main-tab-what').on('click', function() {
    $('#drop-tab-what').attr('class', 'drop-tab real-box');
    $('#drop-tab-when').attr('class', 'drop-tab ghost-box');
    $('#drop-tab-where').attr('class', 'drop-tab ghost-box');

    $('#main-tab-what').removeClass('sleeping-tab').addClass('current-tab');
    $('#main-tab-when').removeClass('current-tab').addClass('sleeping-tab');
    $('#main-tab-where').removeClass('current-tab').addClass('sleeping-tab');

  });

});