const fs = require('fs')
const csv = require('csv-parser')
const randomWords = require('random-words')
const states = [];

fs.createReadStream('./resource/IndiaStateCensusData (1).csv')
  .pipe(csv())
  .on('data', function (row) {

    const state = {
        state: row.State,
        population: row.Population,
        areaInSqKm: row.AreaInSqKm,
        densityPerSqKm: row.DensityPerSqKm

       }
    states.push(state)
  })
  .on('end', function () {
      console.table(states)
    })
