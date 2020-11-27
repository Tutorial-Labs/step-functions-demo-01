exports.handler = function(event, context, callback) {
    console.log("Initial event: " + JSON.stringify(event));
    event.Input.step = event.Input.step + 1; 
    console.log("Initial event: " + JSON.stringify(event));
    callback(null, event);
};
