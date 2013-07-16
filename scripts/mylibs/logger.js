/*global console*/
var Logger = function(options){
    var debug = false,
    module = options.module || '',
    printModule = options.printModule || false;

    var log = function(options){
        if (!isDebugEnabled() || !options.message){ return; }

        var type = options.type || 'log',
        preMessage = '';

        if(printModule){
            if (typeof options.message === 'object') {
                console[type](':'+module+':Object:');
                console[type](options.message);
                console[type](':---:');
            };
            preMessage = module+': ';
        } else {
            console[type](preMessage+options.message);
        }
    };

    var isDebugEnabled = function(){
        return debug;
    };

    return {
        log:  function(message){
            log({
                message: message
            });
        },
        error: function(message){
            log({
                type: 'error',
                message: message
            });
        },
        info: function(message){
            log({
                type: 'info',
                message: message
            });
        },
        turnOn: function(){
            debug = true;
            return true;
        }
    };
};