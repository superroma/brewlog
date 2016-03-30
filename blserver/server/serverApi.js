var domain = require('./domain'),
    readModel = require('./readModel')

function getBatches(req, res, next) {
    //res.setHeader('Content-Type', 'application/json');
    console.log('getBatches');
    return res.json({
        batches: readModel.state.batchList
    })
}

function createBatch(req, res, next) {
    console.log('createBatch');
    console.log(req.body);
    var aggregateId = req.body.id;
    return res.json(domain.processCommand(aggregateId, 'createBatch', req.body));
}

exports.getBatches = getBatches;
exports.createBatch = createBatch;