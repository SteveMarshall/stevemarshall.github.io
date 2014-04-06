document.addEventListener( "DOMContentLoaded", function() {
  var classes = window.location.search.substr(1);
  classes = classes.replace(/-/g, ' ');
  document.body.className = classes;
  document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
}, false );