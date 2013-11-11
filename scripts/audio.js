/*
            Obra de Guadalajara : www.obradeguadalajara.mx
                          Some Rights Reserved
                        Creative Commons License
       Atribución-No comercial-Licenciamiento Recíproco 2.5 México
                                                                      */

/*global $, AudioApp, Logger, Notify, Modernizr*/
$(function(){

    var loadAudioPlayer = function(audiodata) {
        var cssSelector = { jPlayer: "#jquery_jplayer_1", cssSelectorAncestor: "#jp_container_1" },
        playlist = audiodata,
        options = {
            swfPath: "/scripts/jplayer",
            supplied: "mp3",
            autoPlay: false,
            loopOnPrevious: false,
            shuffleOnLoop: false,
            enableRemoveControls: false,
            displayTime: 'slow',
            addTime: 'fast',
            removeTime: 'fast',
            shuffleTime: 'slow'
        },
        myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                  mp3: "/audio/2013-05-05-UnPerfumeMuyEspecial.mp3"
                });
            },
            swfPath: "/scripts/lib/jplayer",
            supplied: "mp3"
        });
    };

    $.getJSON( "audio/audiodata.json", function( data ) {
        loadAudioPlayer(data);
    });

    var myLogger = new Logger({
        'module':'OdeG Main App'
    }),
    myNotify = new Notify({wrapper: 'div#page-notifications'});

    // ToDo: remove next line for production environment
    myLogger.turnOn();
    myLogger.log('APP Start');
});