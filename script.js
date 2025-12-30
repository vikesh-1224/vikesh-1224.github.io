// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Dynamic Home text
const roles = ["Developer", "Flutter Developer", "Web Designer", "CS Student"];
let i = 0;
const dynamicText = document.getElementById("dynamic-text");
function changeRole() {
    dynamicText.textContent = roles[i];
    i = (i + 1) % roles.length;
}
setInterval(changeRole, 2000);

// GitHub Projects
const projectsContainer = document.getElementById("projects-container");
fetch("https://api.github.com/users/vikesh-1224/repos")
    .then(res => res.json())
    .then(data => {
        data.forEach(project => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || "No description"}</p>
                <a href="${project.html_url}" target="_blank">View on GitHub</a>
            `;
            projectsContainer.appendChild(card);
        });
    });

// Animate Skills on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});

// Initialize AOS
AOS.init({ duration: 1000 });
