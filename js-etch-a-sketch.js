const btn = document.createElement("button");
btn.classList.add("gridsize")
document.body.appendChild(btn)

btn.addEventListener("click", function() {
    let squares = prompt("How many squares would you like each side of the container to have? (max: 100)");
    createDivs(squares)
})



const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

container.style.width = "500px"; 
container.style.height = "500px";
container.style.position = "relative";


function createDivs(m=4) {
    for (let i=0; i < m; i++) {

        
        for (let j = 0; j < m; j ++) {
            const childDiv = document.createElement("div");
            childDiv.classList.add("child");
            container.appendChild(childDiv);

            // Set the position, coordinates and styles of the child divs
            childDiv.style.position = "absolute";
            childDiv.style.top = `${i/m * container.offsetHeight}px`; // Changed container.height to container.offsetHeight
            childDiv.style.left = `${j/m * container.offsetWidth}px`; // Changed right to left
            

            childDiv.style.width = `${container.offsetHeight/m}px`;
            childDiv.style.height = `${container.offsetWidth/m}px`;    
            childDiv.style.backgroundColor = "pink"

            childDiv.addEventListener("mouseover", function() {
                r = Math.round(Math.random() * 255);
                g = Math.round(Math.random() * 255);
                b = Math.round(Math.random() * 255);
                childDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
            })
            childDiv.addEventListener("mouseout", function() {
                childDiv.style.backgroundColor = "pink"
            })
        }

    }
}
