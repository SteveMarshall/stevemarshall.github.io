document.addEventListener( "DOMContentLoaded", function() {
  var classes = window.location.search;
  if (classes.match(/\bgrid\b/)) {
      document.body.className = 'grid';

      var anchors = document.getElementsByTagName('a');
      for (var i = 0; i < anchors.length; i++) {
        if (0 === anchors[i].href.indexOf('http://' + window.location.host + '/')) {
          anchors[i].href += '?grid';
        }
      }
  }
  document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
}, false );