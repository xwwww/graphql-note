/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-11-16 11:35:38
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
require('./database/mongoose')()
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening for request on port 4000')
})