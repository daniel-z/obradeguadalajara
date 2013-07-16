/*global Logger, _, moment, $*/
var AudioApp = function(options){
    var myLogger = new Logger({
        'printModule': true,
        'module': 'AudioApp'
    }),
    audiodata,
    audioBasePath = options.audioBasePath,
    audioControlSelector = options.audioControl || '',
    audioListSelector = options.audioList || '',
    audioMonitorSelector = options.audioMonitor;

    // ToDo: remove next logger line for production code
    myLogger.turnOn();

    var render = function(){
        if(!audiodata){ return; }

        $(audioListSelector).html('');

        var preachingList = audiodata.preachings;
        _.each(preachingList, function(preachingData) {
            generateListElement(preachingData);
        }, this);
    },

    generateListElement = function(preachingData){
        var $listElement = $('<li></li>'),
        date = moment(preachingData.date).format('DD MMMM YYYY'),
        $anchor = $('<a href="#Audio-'+preachingData.date+'"></a>'),
        $date = $('<span class="date">'+date+'</span>'),
        $title = $('<span class="title">'+preachingData.title+'</span>');

        $anchor.data('file', getAudioURL(preachingData.file));
        $anchor.data('date', date);
        $anchor.data('title', preachingData.title);

        $anchor.append($date).append($title);
        $listElement.append($anchor);
        $(audioListSelector).append($listElement);

        addAudioControlEvents($anchor);

        return preachingData;
    },

    updateAudioMonitor = function(string){
        $(audioMonitorSelector).text(string);
    },

    getAudioURL = function(filename){
        return audioBasePath + filename;
    },

    addAudioControlEvents = function($element){
        $element.on('click',function(){
            var audioMonitorText = $element.data('date') + ' - ' + $element.data('title'),
            audioControl = $(audioControlSelector).get(0);

            updateAudioMonitor(audioMonitorText);
            audioControl.src = $element.data('file');
            audioControl.play();
        });
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
