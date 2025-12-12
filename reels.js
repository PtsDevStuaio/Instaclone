const videos = document.querySelectorAll(".reel-video");

// Auto play when scrolling to next reel
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    },
    { threshold: 0.8 }
);

videos.forEach(video => {
    observer.observe(video);

    // Tap to Play / Pause
    video.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
    });
});