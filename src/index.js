import './style.css';
import 'normalize.css';
import Note from './note';
import Storage from './storage';

document.addEventListener("DOMContentLoaded", () => {
    const NoteBtn = document.querySelector("#NewNote");
    const list = document.querySelector("#list-content");
    const NoteValue = NoteBtn.value 

    NoteBtn.addEventListener("click", () => {
        if(NoteValue == "notes"){
            Storage.addNoteToList(list);      
        }
        
    });
    Storage.loadNotes(list);
    
});
