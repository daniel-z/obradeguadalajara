/*
            Obra de Guadalajara : www.obradeguadalajara.mx
                          Some Rights Reserved
                        Creative Commons License
       Atribución-No comercial-Licenciamiento Recíproco 2.5 México
                                                                      */

/*global $, console, audioApp*/
$(function(){

    var myAudioApp = new AudioApp({
        audioBasePath: 'audio/',
        audioControl: 'audio#audio-player',
        audioList: 'ul#preaching-list',
        audioMonitor: 'div.audio-preaching span.song'
    }),
    myLogger = new Logger({
        'module':'OdeG Main App'
    });

    // ToDo: remove next line for production environment
    myLogger.turnOn();
    myLogger.log('APP Start');

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