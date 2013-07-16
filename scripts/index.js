/*
            Obra de Guadalajara : www.obradeguadalajara.mx
                          Some Rights Reserved
                        Creative Commons License
       Atribución-No comercial-Licenciamiento Recíproco 2.5 México
                                                                      */

/*global $, console, audioApp*/
$(function(){

    var myAudioApp = new AudioApp({
        audioControlSelector: 'audio#audio-player',
        audioListSelector: 'ul#preaching-list'
    }),
    myLogger = new Logger({
        'module':'OdeG Main App'
    });

    // ToDo: remove next line for production environment
    myLogger.turnOn();
    myLogger.log('APP Start');

    // load audio data
    $.getJSON('audio/audiodata.json', function(data) {
        myAudioApp.init(data);
    });

});