var es = require('./eventStore')

function getInitialState() {
    return {
        batchList: []
    };
}

function onEvent(state, event) {
    switch(event.type) {
        case 'batchCreated':
            state.batchList.push({
                id: event.id,
                name: event.name,
                date: event.date
            })
            console.log('batchList updated')
            break;
        default:
            return;
    }
}

var state = getInitialState()

es.getEvents(function(event){
    onEvent(state, event);
})

es.events.on('onevent', function(event){
    onEvent(state, event);
})

exports.state = state