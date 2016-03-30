/*jslint node:true, esversion:6 */
var store = [],
    events = require('events'),
    async = require('async'),
    fs = require('fs');
        
var em = new events.EventEmitter();

function writeEvent(id, event) {
    var toWrite = event
    toWrite['id'] = id
    toWrite['timeStamp'] = new Date()
    
    store.push(toWrite);
    fs.writeFileSync('events.dat', JSON.stringify(store))
    console.log('es: writeEvent')
    em.emit('onevent',toWrite);
}

function getEvents(id, iteratee) {
    if(!iteratee) {
       iteratee = id 
    }
    if(iteratee) {
        async.eachSeries(store, function(event, cb){
            iteratee(event)
            return cb();
        })
    }
    return;
}
if(fs.existsSync('events.dat')){
    store = JSON.parse(fs.readFileSync('events.dat'))
}
exports.writeEvent = writeEvent
exports.getEvents = getEvents
exports.events = em

