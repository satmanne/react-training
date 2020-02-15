// PROMISE
function asyncWithCallbacks(success, fail) {
  setTimeout(function() {
    success("call succeeds");
  }, 2000);

  setTimeout(function() {
    fail("call failed");
  }, 4000);
}

asyncWithCallbacks(
  function(data) {
    console.log("success", data);
  },
  function(err) {
    console.log("error", err);
  }
);
