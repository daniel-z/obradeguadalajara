/*
            Obra de Guadalajara : www.obradeguadalajara.mx
                          Some Rights Reserved
                        Creative Commons License
       Atribución-No comercial-Licenciamiento Recíproco 2.5 México
                                                                      */

/*global $, AudioApp, Logger, Notify, Modernizr*/
$(function(){

    var myLogger = new Logger({ 'module':'OdeG Main App' }),
    myNotify = new Notify({wrapper: 'div#page-notifications'});

    // ToDo: remove next line for production environment
    myLogger.turnOn();
    myLogger.log('APP Start');
});