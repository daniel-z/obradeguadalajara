/*global $*/
var Notify = function(options){
    var wrapper = options.wrapper || '';

    var log = function(type, message){
        var $notification = $('<div></div>')
                .addClass('notification')
                .addClass(type),
            $message = $('<p></p>').html(message),
            $closeButton = $('<a>x</a>')
                .addClass('close-button');

            $notification.append($closeButton,$message);

        $(wrapper).prepend($notification);

        $notification.on('click', 'a.close-button', function(e){
            var $notification = e.delegateTarget;
            $($notification).fadeOut('200', function(){
                $notification.remove();
            });
        });

        return this;
    };

    return {
        success: function(message){
            log('success', message);
        },
        error: function(message){
            log('error', message);
        },
        info: function(message){
            log('info', message);
        },
        warning: function(message){
            log('warning', message);
        }
    };
};