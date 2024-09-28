const searchField = document.getElementById("search");
const sectionContainer = document.getElementById("section-list");
const textArea = document.getElementById("takeNote");
const noteContainer = document.getElementById("note-container");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    const div = document.createElement("div");
    div.className = "bg-green-500 text-white rounded-md shadow-md p-4"
    const p = document.createElement("p");
    p.innerText = textArea.value;
    div.appendChild(p);
    noteContainer.append(div);

    textArea.value = "";
})