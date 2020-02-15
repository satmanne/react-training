function asyncWithPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("call succeeds");
    }, 2000);

    setTimeout(function() {
      reject("call failed");
    }, 1000);
  });
}

asyncWithPromise()
  .then(function(data) {
    console.log("success", data);
  })
  .catch(function(err) {
    console.log("error", err);
  });

// async & await : promise
async function testAsync() {
  try {
    const data = await asyncWithPromise();
    console.log("data", data);
  } catch (e) {
    console.log("err", err);
  }
}
testAsync();
