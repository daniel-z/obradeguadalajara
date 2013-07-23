/*global $*/
var Notify = function(options){
    var wrapper = options.wrapper || '';

    var log = function(type, message, timeout) {
        var $notification = $('<div></div>')
                .addClass('notification')
                .addClass(type),
            $message = $('<p></p>').html(message),
            $closeButton = $('<a>x</a>')
                .addClass('close-button');

            $notification.append($closeButton,$message);

        $(wrapper).append($notification);

        var closeNotification = function(){
            $notification.fadeOut('200', function(){
                $notification.remove();
            });
        };

        $notification.on('click', 'a.close-button', function(e){
            var notification = e.delegateTarget;
            closeNotification();
        });

        if(timeout > 0){
            setTimeout(function() {
                closeNotification();
            }, timeout);
        }

        return this;
    };

    return {
        success: function(message, timeout){
            log('success', message, timeout);
        },
        error: function(message, timeout){
            log('error', message, timeout);
        },
        info: function(message, timeout){
            log('info', message, timeout);
        },
        warning: function(message, timeout){
            log('warning', message, timeout);
        }
    };
};