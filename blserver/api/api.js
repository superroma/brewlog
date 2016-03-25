function getBatches(req, res, next) {
    //res.setHeader('Content-Type', 'application/json');
    return res.json({
        batches:[
            {name:"OOatmeal Stout", date:"12.03.2015"},
            {name:"BlindPig IPA", date: "01.02.2015"}
        ]
    })
}

exports.getBatches = getBatches;