import app from './app.js'

app.listen(app.get('PORT'), function () {
  console.log(`Server up on port http://localhost:${this.address().port}/`)
})
