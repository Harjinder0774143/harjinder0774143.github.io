// WEB303 Assignment 2
// Your Name Here


$(document).ready(function () {
    function makeRequest(filename) {
      $.get(filename, function (data, status) {
        if (status === "success") {
          $("#solution")
            .css({ opacity: 0, marginLeft: "+=30px" })
            .html(data)
            .animate({ opacity: 1, marginLeft: "-=30px" }, "slow");
        }
      });
    }
  
    $("#vprospect").click(() => makeRequest("prospect.html"));
    $("#vconvert").click(() => makeRequest("convert.html"));
    $("#vretain").click(() => makeRequest("retain.html"));
  });
