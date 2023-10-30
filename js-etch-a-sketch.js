const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

container.style.width = "400px"; 
container.style.height = "400px";
container.style.display = "flex";
container.style.flexWrap = "wrap";

// container.style.position = "relative";


for (let i=0; i < 4; i++) {

    
    for (let j = 0; j < 4; j ++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child");
        container.appendChild(childDiv);

        // Set the position, coordinates and styles of the child divs
        childDiv.style.position = "absolute";
        childDiv.style.top = `${i/4 * container.offsetHeight}px`; // Changed container.height to container.offsetHeight
        childDiv.style.left = `${j/4 * container.offsetWidth}px`; // Changed right to left
        

        childDiv.style.width = `${container.offsetHeight/4}px`;
        childDiv.style.height = `${container.offsetWidth/4}px`;    
        childDiv.style.backgroundColor = "pink"
    }

    

}