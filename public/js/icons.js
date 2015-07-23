'use strict';
$(function() {
  var kids = $('.featured-for.kids');
  var access = $('.featured-for.access');

  $(kids).each(function(i) {
    $(kids[i]).children('div.icons').append('<img src="../images/forkids.png" height="40" width="69" alt="great for kids">');
  })
  
  $(access).each(function(i) {
    $(access[i]).children('div.icons').append('<img src="../images/easyaccess.png" height="40" width="69" alt="great for anyone with mobility issues">');
  })
});