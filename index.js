const app = require('express')()

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(process.env.PORT || 3000)
