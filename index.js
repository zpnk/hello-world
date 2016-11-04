const app = require('express')()

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(process.env.PORT || 3000)
