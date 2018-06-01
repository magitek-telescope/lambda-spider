const axios = require('axios')

console.log('starting function')
exports.handle = (event, ctx, cb) => {
  axios[event.method](event.endpoint, event.params)
  .then(({ data }) => {
    cb(null, { error: false, data: data })
  })
  .catch((data) => {
    cb(null, { error: true, data: data })
  })
}
