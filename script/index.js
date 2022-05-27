import nav from "./components/nav.js"
import sidebar from "./components/sidebar.js"

// Docs
$("#docs").click(function (e) { 
    e.preventDefault();
    $.ajax({
        url: "/pages/docs.html",
        context: document.body
      }).done(function(res) {
        $( "#main" ).html( res );
      });
});

// Usage
$("#usage").click(function (e) { 
    e.preventDefault();
    $.ajax({
        url: "/pages/usage.html",
        context: document.body
      }).done(function(res) {
        $( "#main" ).html( res );
      });
});

