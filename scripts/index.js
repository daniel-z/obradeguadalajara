/*
            Obra de Guadalajara : www.obradeguadalajara.mx
                          Some Rights Reserved
                        Creative Commons License
       Atribución-No comercial-Licenciamiento Recíproco 2.5 México
                                                                      */

/*global $, AudioApp, Logger, Notify, Modernizr*/
$(function(){

    var myAudioApp = new AudioApp({
        audioBasePath: 'audio/',
        audioControl: 'audio#audio-player',
        audioList: 'ul#preaching-list',
        audioMonitor: 'div.audio-preaching span.song'
    }),
    myLogger = new Logger({
        'module':'OdeG Main App'
    }),
    myNotify = new Notify({wrapper: 'div#page-notifications'});

    // ToDo: remove next line for production environment
    myLogger.turnOn();
    myLogger.log('APP Start');

    myNotify.warning('Esta p&aacute;gina esta en desarrollo, gracias por tu paciencia!');

    // load audio data
    if (Modernizr.audio.mp3){
        $.getJSON('audio/audiodata.json', function(data) {
            myAudioApp.init(data);
        });
    } else {
        $('div.audio-preaching').addClass('hidden');
        $('p.audio-notification').removeClass('hidden');
    }
});