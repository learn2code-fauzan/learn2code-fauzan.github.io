document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 80; // header height
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);
            if (!target) return;

            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            // Advanced smooth scroll using window.requestAnimationFrame
            smoothScrollTo(window.pageYOffset, targetPosition, 800);
        });
    });

    function smoothScrollTo(start, end, duration) {
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, end - start, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation); 
    }


    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // Smooth scroll code yaha already hai, uske niche add karo
    document.body.style.opacity = "1";

    // Page reload hone par top se start



});
