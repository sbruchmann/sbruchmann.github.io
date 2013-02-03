(function sandbox () {
  'use strict';

  window.WebFontConfig = {
    google: {
      families: [
        'Open+Sans:400,400italic,700,800:latin'
      ]
    }
  };

  function loadWebfonts () {
    var serviceURL = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    var targetNode = document.getElementsByTagName('script')[0].parentNode;
    var webfontLoader = document.createElement('script');

    webfontLoader.async = true;
    webfontLoader.src = serviceURL;

    targetNode.appendChild(webfontLoader);
  }

  window.addEventListener('load', loadWebfonts, false);
}());
