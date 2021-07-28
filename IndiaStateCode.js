const fs = require('fs')
const csv = require('csv-parser')
const randomWords = require('random-words')
const states = [];

fs.createReadStream('./resource/IndiaStateCode (1).csv')
  .pipe(csv())
  .on('data', function (row) {

    const state = {
        srno: row.SrNo,
        statename: row.StateName,
        tin:row.TIN,
        statecode: row.StateCode,
        }
    states.push(state)
  })
  .on('end', function () {
      console.table(states)
    })
