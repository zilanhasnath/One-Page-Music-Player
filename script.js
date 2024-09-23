function playAudio() {
    var audio = document.getElementById("bgm");
    audio.play().catch(function(error) {
        console.error("Audio playback failed:", error);
    });
}
