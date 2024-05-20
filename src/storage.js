import Note from './note';

export default class Storage {
    static getNotes() {
        return JSON.parse(localStorage.getItem('notes')) || [];
    }

    static saveNotes() {
        const notes = [];
        document.querySelectorAll(".list-item").forEach(noteElement => {
            const title = noteElement.querySelector(".title-class").value;
            const description = noteElement.querySelector(".desc-class").value;
            const date = noteElement.querySelector("p").textContent;
            const priority = noteElement.querySelector(".priority-button").classList[1];
            notes.push(new Note(title, description, date, priority));
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    static loadNotes(list) {
        const notes = this.getNotes();
        notes.forEach(noteData => {
            const note = new Note(
                noteData.title,
                noteData.description,
                noteData.date,
                noteData.priority
            );
            list.appendChild(note.createNoteElement());
        });
    }

    static addNoteToList(list) {
        const newNote = new Note();
        list.appendChild(newNote.createNoteElement());
        this.saveNotes();
    }

    static removeNoteElement(noteElement) {
        const list = noteElement.parentElement;
        const index = Array.from(list.children).indexOf(noteElement);
        if (index !== -1) {
            noteElement.remove();
            this.saveNotes();
        }
    }
}
