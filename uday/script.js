/* =========================================
   CH UDAY BIRTHDAY SURPRISE
   Vanilla JavaScript
========================================= */


/* =========================================
   CREATE STARS
========================================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 140; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

const particlesContainer =
    document.getElementById("particles");

for (let i = 0; i < 25; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.animationDuration =
        7 + Math.random() * 8 + "s";

    particlesContainer.appendChild(particle);
}


/* =========================================
   OPEN SURPRISE
========================================= */

const openBtn =
    document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    createConfetti(100);

    const birthdaySection =
        document.querySelector(".birthday-section");

    birthdaySection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   TYPEWRITER EFFECT
========================================= */

const typewriter =
    document.querySelector(".typewriter");

const originalText =
    typewriter.textContent.trim();

typewriter.textContent = "";

let typeIndex = 0;
let typeStarted = false;


function typeWriterEffect() {

    if (typeIndex < originalText.length) {

        typewriter.textContent +=
            originalText.charAt(typeIndex);

        typeIndex++;

        setTimeout(
            typeWriterEffect,
            25
        );

    }
}


const typeObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !typeStarted
                ) {

                    typeStarted = true;

                    typeWriterEffect();

                }

            });

        },
        {
            threshold: 0.4
        }
    );


typeObserver.observe(typewriter);


/* =========================================
   FINAL SURPRISE
========================================= */

const finalBtn =
    document.getElementById("finalBtn");

const surpriseMessage =
    document.getElementById("surpriseMessage");

finalBtn.addEventListener("click", () => {

    /* Hide button */

    finalBtn.style.display = "none";


    /* Reveal message */

    surpriseMessage.classList.add("show");


    /* Large confetti */

    createConfetti(250);


    /* Floating hearts */

    createHearts(40);


    /* Wait and go to final screen */

    setTimeout(() => {

        const finalScreen =
            document.getElementById("finalScreen");

        finalScreen.scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const confettiColors = [
        "#ff69b4",
        "#a78bfa",
        "#ffffff",
        "#ffd166",
        "#7dd3fc"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];

        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 12 + 7 + "px";

        confetti.style.animationDuration =
            2 + Math.random() * 4 + "s";

        confetti.style.animationDelay =
            Math.random() * .5 + "s";

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > .5
                ? "❤️"
                : "💖";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.setProperty(
            "--move",
            (Math.random() * 200 - 100) + "px"
        );

        heart.style.animationDuration =
            3 + Math.random() * 3 + "s";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 6000);

    }

}


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {

    try {

        if (musicPlaying) {

            music.pause();

            musicBtn.textContent =
                "🎵 Music";

            musicPlaying = false;

        } else {

            await music.play();

            musicBtn.textContent =
                "⏸ Pause";

            musicPlaying = true;

        }

    } catch (error) {

        alert(
            "Add music/birthday.mp3 first, then tap the music button."
        );

    }

});


/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;

        const gradient1 =
            document.querySelector(
                ".gradient-1"
            );

        const gradient2 =
            document.querySelector(
                ".gradient-2"
            );

        gradient1.style.transform =
            `translateY(${scrollY * 0.08}px)`;

        gradient2.style.transform =
            `translateY(${-scrollY * 0.05}px)`;

    },
    {
        passive: true
    }
);


/* =========================================
   REDUCE MOTION SUPPORT
========================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}