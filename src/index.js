/* 
todos:
* Esses envolvem a parte grafica
1 - escolha a palheta de cores do site
2 - escolha os icones de cada area
3 - elimine a area de agenda
4 - gere as notas place holders
* Esses envolvem o salvamento de dados
1- adicione uma maneira do armazenamento local salvar os projetos e notas
* Esses envolvem a parte de desenvolvimetno
1- separe e exporte as funções de criar nota e projeto
2- gere a aba de projetos, precisa ter um check list!
3- precisa ter uma data de entrega
? e só adicionar um botão que muda de cor quando e clicado e um + que adiciona outros checks,dá uma olhada na documentação do due date pra o resto.
! esse todo não tem uma prioridade mas eu aconselharia começar pela area de desenvolvimento e então passar para a de dados
kisses from past kevyn
*/

import './style.css';
import 'normalize.css';

import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import trashImg from './img/trashcan.svg';

document.addEventListener("DOMContentLoaded", () => {
    const NoteBtn = document.querySelector("#NewNote")
    const list = document.querySelector("#list-content");

    // Função para criar uma nota
    function createNote() {

      const today = new Date();
      const formattedDate = format(today, 'PPPP', { locale: pt });

        const note = document.createElement("div");
        note.classList.add("list-item");

        const content = document.createElement('div');

        const HeadContent = document.createElement('div')
        HeadContent.classList.add("Head-Class")

        const title = document.createElement("input");
        title.classList.add("title-class");
        title.placeholder = "um titulo legal"
        HeadContent.appendChild(title)

        const date = document.createElement('p')
        date.textContent = formattedDate
        HeadContent.appendChild(date)

        const description = document.createElement("textarea");
        description.classList.add("desc-class")
        description.placeholder = "Uma descrição do seu trabalho"

        const priority = document.createElement("button");
        priority.classList.add ("priority-button")
        priority.classList.add("green")
        priority.addEventListener("click", () => {
          if (priority.classList.contains("red")) {
        priority.classList.remove("red");
        priority.classList.add("green");
    } else if (priority.classList.contains("green")) {
        priority.classList.remove("green");
        priority.classList.add("yellow");
    } else if (priority.classList.contains("yellow")) {
        priority.classList.remove("yellow");
        priority.classList.add("red");
    } else {
        // Se nenhuma das classes estiver presente, adiciona "red" como a classe inicial
        priority.classList.add("red");
    }
      });

        const deleteButton = document.createElement("button");
        const trash = new Image()
        trash.src = trashImg
        deleteButton.appendChild(trash)
        deleteButton.classList.add("Trash-Button")
        deleteButton.addEventListener("click", () => {
            note.remove();
        });

        note.appendChild(HeadContent);
        note.appendChild(content);
        content.appendChild(description);
        content.appendChild(priority);
        content.appendChild(deleteButton);

        return note;
    }
    // Função para adicionar uma nova nota
    function addNote() {
        const newNote = createNote();
        list.appendChild(newNote);
    }
    // Adiciona uma nota ao carregar a página
    NoteBtn.addEventListener("click", () => {
      addNote()
  });
});
