var es = require('./eventStore')

function processCommand(id, command, params) {
    var event = params
    
    if (command === 'createBatch') {
        event['type'] = 'batchCreated'
    }
    es.writeEvent(id, event)
    return event;
}

exports.processCommand = processCommand;
