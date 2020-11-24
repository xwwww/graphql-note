const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://localhost/graphql', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  const db = mongoose.connection

  db.on('error', (error) => {
    console.error(error)
  })

  db.once('open', () => {
    console.log('Database connect')
  })
}
