function getBatches(req, res, next) {
    //res.setHeader('Content-Type', 'application/json');
    console.log('getBatches');
    return res.json({
        batches:[
            {name:"OOatmeal Stout", date:"12.03.2015"},
            {name:"BlindPig IPA", date: "01.02.2015"}
        ]
    })
}

function createBatch(req, res, next) {
    console.log('createBatch');
    console.log(req.body);
    return res.json({
        batches:[
            {name:"New Stout", date:"14.03.2015"},
            {name:"OOatmeal Stout", date:"12.03.2015"},
            {name:"BlindPig IPA", date: "01.02.2015"}
        ]
    })
}

exports.getBatches = getBatches;
exports.createBatch = createBatch;