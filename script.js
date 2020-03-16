$(function (){
    var socket = io('http://localhost:5000'); // create socket client
    $('form').submit(function(e){
      e.preventDefault; //prevent page reloading
      socket.emit('chat-message', $('#m').val()); //get value from input id = #m
      $('#m').val('');
      return false;
    });
    socket.on('chat-message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  });