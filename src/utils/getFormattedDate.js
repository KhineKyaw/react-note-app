const getFormattedDate = () => {
  let D = new Date()
  let date = D.toDateString().split(" ")
  return {
    formatted: `${date[1]} ${date[2]}, ${date[3]}`,
    millis: D.getTime().toString()
  }
}

export default getFormattedDate
