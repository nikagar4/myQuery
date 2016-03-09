var $ = function() {
  var publicAPI = {
    getByClass: function(selector) {
      var type = selector[0];
      if (!selector || type !== '.') {
        return;
      }
      return document.getElementsByClassName(selector.substring(1));
    },
    getById: function(selector) {
      var type = selector[0];
      if (!selector || type !== '#') {
        return;
      }
      return document.getElementById(selector.substring(1));
    },
    getByAttribute: function(selector) {
      if (!selector) {
        return;
      }
      return document.querySelector(selector);
    },
    ready: function(func) {
      window.onload = func;
    },
    event: function(elem, type, handler) {
      elem.addEventListener(type, function() {
        handler();
      });
    }
  };
  return publicAPI;
}();
$.getById('#output').innerHTML = $.getById('#span1');
$.ready(function() {
  console.log('hello world');
});
$.event($.getById('#span1'), 'click', function() {
  alert('hello world');
});

// Current Code Written by Shako Kalandarishvili, Ideas by Nika and Shako
// Commits made by Nika
// Couldn't find the old version
