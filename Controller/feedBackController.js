const UserModel = require('../DataModel').users
const ResturantModel = require('../DataModel').resturants

exports.addFeedBack = (req, res) => {
    var resturantid = req.body.rid
    var userid = req.body.uid

    //add the feedback to the user DB
    UserModel.find({ _id: userid }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            var feedback = {
                restname: req.body.restname,
                text: req.body.text,
                rate: req.body.rate
            }
            data.feedBack.push(feedback)
            UserModel.update({ _id: userid }, { feedBack: data.feedBack }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data)
                    return res.status(200).send('feedback updated')
            })
        }
    })

    //add the feedback to the resturant DB
    ResturantModel.find({ _id: resturantid }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('resturant not Found')
        else {
            var feedback = {
                username: req.body.username,
                text: req.body.text,
                rate: req.body.rate
            }
            data.resturantFeedback.push(feedback)
            ResturantModel.update({ _id: resturantid }, { resturantFeedback: data.resturantFeedback }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data)
                    return res.status(200).send('feedback updated')
            })
        }
    })
}

exports.getbycat = (req, res) => {
    ResturantModel.find({ categoty: { $all: ["Sea Food"] } }, (err, data) => {
        if (err)
            return res.status(400).send('error')

        if (!data)
            return res.status(402).send('not found category')
        return res.status(200).send(data)
    })
}