var socket = io();
$(document).ready(function() {
    $('#send-message').focus();

    $('#send-form').submit(function() {
        var message = $('#send-message').val();
        socket.emit('chat', message);
        $('#send-message').val('');
        return false;

    });

    socket.on('chat', function(message) {
        console.log(message);
    })
});