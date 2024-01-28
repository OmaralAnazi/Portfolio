import {renderProjects, runFadding} from "./utils.js";

const projectsContainer = document.getElementById("projects-container");
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filterFunc = project => project.name.toLowerCase().includes(searchTerm);
    renderProjects(projectsContainer, filterFunc);
    if(projectsContainer.innerHTML === "") {
        projectsContainer.innerHTML = `<p style="margin: auto">No projects match your search...</p>`;
    }
});

renderProjects(projectsContainer);
runFadding(false);