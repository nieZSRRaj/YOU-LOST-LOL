document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("startBtn");
    const audio = document.getElementById("audioPlayer");
    const image = document.getElementById("mainImage");

    button.addEventListener("click", function () {
        // pokaż obraz
        image.style.display = "block";

        // odtwórz dźwięk
        audio.volume = 1.0;
        audio.play();

        // ukryj przycisk (opcjonalnie)
        button.style.display = "none";
    });
});
