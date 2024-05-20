import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import trashImg from './img/trashcan.svg';
import Storage from './storage';

export default class Note {
    constructor(title = '', description = '', date = format(new Date(), 'PPPP', { locale: pt }), priority = 'green') {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    createNoteElement() {
        const note = document.createElement("div");
        note.classList.add("list-item");

        const content = document.createElement('div');
        const HeadContent = document.createElement('div');

        HeadContent.classList.add("Head-Class");

  

        const title = document.createElement("input");
        title.classList.add("title-class");
        title.placeholder = "um titulo legal";
        title.value = this.title;
        HeadContent.appendChild(title);

        const date = document.createElement('p');
        date.textContent = this.date;
        HeadContent.appendChild(date);

        const description = document.createElement("textarea");
        description.classList.add("desc-class");
        description.placeholder = "Uma descrição do seu trabalho";
        description.value = this.description;

        const priority = document.createElement("button");
        priority.classList.add("priority-button");
        priority.classList.add(this.priority);
        priority.addEventListener("click", () => {
            this.togglePriority(priority);
            Storage.saveNotes();
        });

        const deleteButton = document.createElement("button");
        const trash = new Image();
        trash.src = trashImg;
        deleteButton.appendChild(trash);
        deleteButton.classList.add("Trash-Button");
        deleteButton.addEventListener("click", () => {
            Storage.removeNoteElement(note);
        });

        note.appendChild(HeadContent);
        note.appendChild(content);
        content.appendChild(description);
        content.appendChild(priority);
        content.appendChild(deleteButton);

        title.addEventListener("input", () => {
            this.title = title.value;
            Storage.saveNotes();
        });

        description.addEventListener("input", () => {
            this.description = description.value;
            Storage.saveNotes();
        });

        return note;
    }

    togglePriority(button) {
        if (button.classList.contains("red")) {
            button.classList.replace("red", "green");
            this.priority = "green";
        } else if (button.classList.contains("green")) {
            button.classList.replace("green", "yellow");
            this.priority = "yellow";
        } else if (button.classList.contains("yellow")) {
            button.classList.replace("yellow", "red");
            this.priority = "red";
        } else {
            button.classList.add("red");
            this.priority = "red";
        }
    }
}
