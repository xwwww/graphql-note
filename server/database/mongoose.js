/*
 * @Author: your name
 * @Date: 2020-10-31 20:30:24
 * @LastEditTime: 2020-10-31 20:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /graphql-playlist/server/database/mongoose.js
 */
const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://localhost/graphql', {
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', (error) => {
    console.error(error)
  })

  db.once('open', () => {
    console.log('Database connect')
  })
}
