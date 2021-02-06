const { db } = require('../db')

const getData = async (userId) => {
  const user = await db.collection('users').doc(userId).get()

  console.log(user)
  if (!user.exists) {
    console.log('No such document!')
  } else {
    console.log('Document data:', user.data())
  }
}

module.exports = { getData }
