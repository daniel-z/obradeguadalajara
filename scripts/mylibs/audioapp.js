/*global Logger*/
var AudioApp = function(options){
    var myLogger = new Logger({
        'printModule': true,
        'module': 'AudioApp'
    }),
    audiodata,
    audioControlSelector = options.audioControlSelector || '',
    audioListSelector = options.audioListSelector || '';

    // ToDo: remove next logger line for production code
    myLogger.turnOn();

    var render = function(){
        //
    };

    var init = function(data){
        if(!data) {
            //throw error
            myLogger.error('missing data');
            return;
        }

        myLogger.log('initialized');
        myLogger.log(data);
        audiodata = data;
    };

    return {
        init: init
    };
};
