import {renderProjects, runFadding} from "./utils.js";
import toolsData from "./toolsData.js";
import "./scroll.js"

const projectsContainer = document.getElementById("projects-container");
const toolsContainer = document.getElementById("tools-container");

function getToolHtml(toolObject) {
    return `
    <div class="tool">
    <img class="tool-icon" src="${toolObject.pic}" alt="${toolObject.name}">
    <p class="tool-name">${toolObject.name}</p>
    </div>
    `;
}

function renderTools() {
    toolsContainer.innerHTML = toolsData.map(tool => getToolHtml(tool)).join("");
}

renderProjects(projectsContainer, project => project.isMain);
renderTools();
runFadding();