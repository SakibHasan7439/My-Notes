const searchField = document.getElementById("search");
const sectionContainer = document.getElementById("section-list");
const textArea = document.getElementById("takeNote");
const noteContainer = document.getElementById("note-container");
const button = document.getElementById("button");
const parent = document.getElementById("parent");
const historyBtn = document.getElementById("history");
const deleteNotesContainer = document.getElementById("deleteNotes");
const mainSection = document.getElementById("main-section");

parent.addEventListener("click", (e)=>{
    if(e.target.tagName === "TEXTAREA"){
        return;
    }
    if(textArea.value === ""){
        return;
        
    }
    const div = document.createElement("div");
    div.className = "bg-green-500 text-white rounded-md shadow-md p-4";
    const i = document.createElement("i");
    i.className = ("fa-solid text-xl fa-trash");
    const p = document.createElement("p");
    p.innerText = textArea.value;
    div.appendChild(p);
    div.append(i);
    noteContainer.append(div);

    i.addEventListener("click", deleteNote);
    textArea.value = "";
})

function deleteNote(){
    const parentNode = this.parentNode;
    // const div = parentNode.parentNode;
    deleteNotesContainer.appendChild(parentNode);
    // div.removeChild(parentNode);

}

function showSection(id){
    document.getElementById("parent").classList.add("hidden");
    document.getElementById("deleteNotes").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}

historyBtn.addEventListener("click", ()=>{
    showSection("deleteNotes");
})

mainSection.addEventListener("click", ()=>{
    showSection("parent");
})