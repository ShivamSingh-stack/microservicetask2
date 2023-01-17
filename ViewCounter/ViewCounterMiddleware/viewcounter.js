const fs = require('fs')

const viewCounter = (req, res, next)=>{
    console.log("in vc");

    const visits = fs.readFileSync('visits.json', 'utf-8')
    const visitsData = JSON.parse(visits)
    visitsData.visits = visitsData.visits + 1
    const newData = JSON.stringify(visitsData)
    fs.writeFileSync('visits.json', newData)
    
    next()

}

module.exports = viewCounter