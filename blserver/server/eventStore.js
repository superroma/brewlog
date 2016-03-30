/*jslint node:true, esversion:6 */
var store = [],
    events = require('events'),
    async = require('async');
        
var em = new events.EventEmitter();

function writeEvent(id, event) {
    var toWrite = event
    toWrite['id'] = id
    toWrite['timeStamp'] = new Date()
    
    store.push(toWrite);
    console.log('es: writeEvent')
    em.emit('onevent',toWrite);
}

function getEvents(id, iteratee) {
    if(!iteratee) {
       iteratee = id 
    }
    if(iteratee) {
        async.eachSeries(store, iteratee)
    }
    return;
}

exports.writeEvent = writeEvent
exports.getEvents = getEvents
exports.events = em

