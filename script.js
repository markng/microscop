navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });

document.getElementById('fullscreen').addEventListener('click', function() {
    var video = document.getElementById('video');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});