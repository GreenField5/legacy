const Restaurant = require('../DataModel').resturants
const restData = require('../restdata/restaurant.json')


exports.fillrest = (req, res) => {
    for (let index = 0; index < restData.length; index++) {
        var rest = new Restaurant(restData[index])
        rest.save((err, rest1) => {
            if (err)
                console.log(err)
            console.log(rest1)
        })
    }
    res.send(restData)
}