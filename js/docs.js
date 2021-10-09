"use strict";

$(document).ready(function () {
  var location = window.location.protocol + "//" + window.location.hostname;
  $('.location').text(location);
  var hash,
      flagCensor = false;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');

    if (hash[0] == 'cens') {
      flagCensor = true;
    }
  }

  if (flagCensor) {
    $('.version1').hide();
    $('.censor').show();
  }
});