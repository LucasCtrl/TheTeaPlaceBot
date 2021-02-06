module.exports = () => {
  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  let newDate = `${hours}:${toTwoChar(minutes)}:${toTwoChar(seconds)} - ${day} ${monthNames[month]} ${year}`

  return newDate
}

const toTwoChar = (number) => (parseInt(number) < 10 ? '0' + number.toString() : number.toString())
