import projects from "./projectsData.js";

export function renderProjects(projectsContainer, filterFunc) {
    projectsContainer.innerHTML = projects.filter(filterFunc || (() => true)).map(project => getProjectHtml(project)).join("");
}

function getProjectHtml(projectObject) {
    return `
    <div class="project ">
        <img class="project-pic" src="${projectObject.pic}" alt="${projectObject.name} site picture">
        <div class="project-content">
            <h3 class="project-name">${projectObject.name}</h3>
            <p class="project-desc">${projectObject.desc}</p>
            <a class="visit-site-link" href="${projectObject.link}" target="_blank">Visit the site <span class="arrow-link">></span></a>
        </div>
    </div>
    `;
}

export function runFadding(isInfiniteFading = true) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) 
                entry.target.classList.add("show");
            else if (isInfiniteFading)
                entry.target.classList.remove("show");        
        })
    });
    
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));
}