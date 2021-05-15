require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(
  `mongodb://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@${process.env.MONGODBLINK}:${process.env.MONGODBPORT}/${process.env.MONGODBDATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Db connected')
})
