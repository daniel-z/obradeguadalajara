/*global Logger, _, $*/
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
        if(!audiodata){ return; }

        $(audioListSelector).html('');

        var preachingList = audiodata.preachings;
        _.each(preachingList, function(preachingData) {
            var $listElement = $('<li></li>'),
            $anchor = $('<a href="#Audio-'+preachingData.date+'"></a>'),
            $date = $('<span class="date">'+preachingData.date+'</span>'),
            $title = $('<span class="title">'+preachingData.title+'</span>');

            $anchor.append($date).append($title);
            $listElement.append($anchor);
            $(audioListSelector).append($listElement);
        }, this);
    };

    var init = function(data){
        if(!data) {
            //throw error
            myLogger.error('missing data');
            return;
        }

        myLogger.log('initialized');
        audiodata = data;
        render();
    };

    return {
        init: init
    };
};
