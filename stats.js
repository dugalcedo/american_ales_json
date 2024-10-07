import fs from 'fs'

const data = JSON.parse(fs.readFileSync('./data.json'))

console.log(data.beers.length)
console.log(data.breweries.length)