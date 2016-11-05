const app = require('express')()

app.get('/', (req, res) => {
  res.send('hello now')
})

app.listen(process.env.PORT || 3000)
