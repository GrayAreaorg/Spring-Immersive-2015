// Node's Callback Pattern

// `delayed` is a small wrapper around `setTimeout`
// which returns a result after 1000ms.
var delayed = function(callback) {
  setTimeout(function() {
    callback(null, { ok: true })
  }, 1000)
}

// Callbacks in Node always take an error as the
// first argument. If the operation completed successfully,
// this value will be `null`. If something went wrong, you
// need to handle the error – in this case, we're just
// throwing it.
delayed(function(err, result) {
  if (err) throw err

  // `result` should be { ok: true }
  // As such running this script should output `true`
  // to the console.
  console.log(result.ok)
})

// We can run this function twice, and both
// will be called back at the same time.
delayed(function(err, result) {
  if (err) throw err
  console.log(result.ok)
})
