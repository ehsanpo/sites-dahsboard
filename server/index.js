const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path');
const router = jsonServer.router(path.join(__dirname, '../../../shared/db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8081, () => {
  console.log('JSON Server is running' , path.join(__dirname, '../../../shared/db.json') )
})