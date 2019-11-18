const Express = require('express')
const app = Express()
const path = require('path')

app.use(Express.static(path.join(__dirname, './public')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})

app.listen(8080, () => {
  console.log('server up on port 8080')
})