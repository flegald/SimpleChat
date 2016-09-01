$(function(){


	var peer = new Peer('David', {'key': 'b2rvr10uhuz69a4i'});


// Video Call

	// Call
	$('#callVideo').on('click', function(){
		var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

		getUserMedia({video: true, audio: true}, function(receiver, stream){
			var call = peer.call(receiver, stream);
			call.on('stream', function(remoteStream){
				// Show stream on canvas!!!
			});
		}, function(err){
			console.log('Error', err);
		});
	})

	//Receive
	

	// Data Call
	$('callData').on('click', function(){
		var conn = peer.connect("Another peers ID")

		conn.on('open', function(){
			conn.send('Hi');
		})
	})


