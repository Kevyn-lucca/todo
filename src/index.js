import './style.css';
import 'normalize.css';
import Note from './note';
import Storage from './storage';


document.addEventListener("DOMContentLoaded", () => {
    const NoteBtn = document.querySelector("#Notes");
    const list = document.querySelector("#list-content");

    NoteBtn.addEventListener("click", () => {
            Storage.addNoteToList(list);        
    });
    
    Storage.loadNotes(list);


});


