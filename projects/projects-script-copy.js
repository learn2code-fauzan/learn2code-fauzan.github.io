const dots = document.querySelectorAll(".dot");
const images = document.querySelectorAll(".image");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const textSection = document.querySelector(".text-section");

const data = [
    {
        title: "MUFASA AI",
        desc: "I developed Mufasa AI, an advanced and intelligent AI assistant integrated using Python and Tkinter. It offers a smooth, interactive desktop interface that is easy to use and visually clean. Mufasa AI is designed to handle multiple tasks such as answering questions, automating routine activities, and providing smart assistance in real time. The system focuses on efficiency, practicality, and productivity, making it a highly useful tool for daily use, learning, and project-based applications."
    },

    {
        title: "JARVIS",
        desc: "I developed Jarvis, an intelligent AI assistant built using Python. It features a user-friendly and interactive system designed to make daily tasks easier and faster. Jarvis can answer questions, automate routine operations, and provide smart assistance in real time. The assistant is designed with efficiency and practicality in mind, helping improve productivity and learning. Jarvis combines powerful AI capabilities with a clean structure, making it a reliable and useful tool for personal use and project-based applications."
    },

    {
        title: "ZOMATO CLONE",
        desc: "I developed a Zomato Clone using HTML, CSS, and JavaScript, designed to replicate the look and basic functionality of a real food ordering platform. The project includes responsive layouts, restaurant listings, menu sections, and interactive features for a smooth user experience. It focuses on clean design, usability, and front-end logic. This clone helps demonstrate strong skills in web development, UI design, and JavaScript-based interactivity for real-world applications."
    },

    {
        title: "AUTO REPLY CHATBOT",
        desc: "I developed an Auto Reply Chatbot using Python, designed to automatically respond to user messages in real time. The chatbot analyzes input text and provides relevant, predefined, or intelligent replies based on logic and conditions. It helps save time, improve response speed, and handle repetitive conversations efficiently. This project focuses on automation, text processing, and smart interaction. The Auto Reply Chatbot is useful for customer support, learning purposes, and understanding real-world chatbot development using Python."
    },

    {
        title: "VIDEO DOWNLOADER",
        desc: "I developed a Video Downloader application using Python and Tkinter, designed to download videos quickly and easily from supported platforms. The tool features a simple and user-friendly graphical interface where users can paste a video link and start downloading with a single click. It focuses on speed, reliability, and ease of use. This project demonstrates skills in GUI development, file handling, and automation, making it a practical desktop application for real-world use."
    },

    {
        title: "WEATHER APP",
        desc: "I developed a Weather App using Python and Tkinter, designed to provide real-time weather information through a clean and user-friendly desktop interface. The application fetches current weather details such as temperature, humidity, and weather conditions based on user input. It focuses on simplicity, accuracy, and smooth interaction. This project demonstrates skills in API integration, data handling, and GUI development, making it a practical application for learning and real-world desktop software development."
    }
];

window.onload = () => {
    images[0].querySelector("video").play();
};

dots.forEach(dot => {
    dot.onclick = () => {
        const i = Number(dot.dataset.index);

        dots.forEach(d => d.classList.remove("active"));
        images.forEach(img => {
            img.classList.remove("active");
            const v = img.querySelector("video");
            if (v) {
                v.pause();
                v.currentTime = 0;
            }
        });

        dot.classList.add("active");
        images[i].classList.add("active");

        /* LAST DOT (TEXT ONLY) */
        if (i === 6) {
            textSection.classList.add("hide-left");
            return;
        }

        /* NORMAL SLIDES */
        textSection.classList.remove("hide-left");
        title.innerText = data[i].title;
        desc.innerText = data[i].desc;

        images[i].querySelector("video").play();
    };
});

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


