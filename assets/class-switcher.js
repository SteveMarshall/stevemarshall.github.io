document.addEventListener( "DOMContentLoaded", function() {
  var classes = window.location.search.substr(1);
  if (0 < classes.length) {
      classes = classes.replace(/-/g, ' ');
      document.body.className = classes;

      var anchors = document.getElementsByTagName('a');
      for (var i = 0; i < anchors.length; i++) {
        if (0 === anchors[i].href.indexOf('http://' + window.location.host + '/')) {
          anchors[i].href += window.location.search;
        }
      }
  }
  document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
}, false );