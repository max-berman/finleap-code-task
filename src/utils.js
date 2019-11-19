const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
const uniqueBy = a =>
  [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

export { unique, uniqueBy }
