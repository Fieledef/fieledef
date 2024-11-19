document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');

    // Reproducir el audio automáticamente cuando se cargue
    audioPlayer.addEventListener('play', function () {
        audioPlayer.loop = false;  // Asegura que no se repita automáticamente
    });
});
