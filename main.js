const myLibrary = [];

function Book(title, author, numOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title, author, numOfPages, isRead) {
    let newObject = new Book(title, author, numOfPages, isRead)
    myLibrary.push(newObject);
}


function displayCard() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    for (const book of myLibrary) {
         const bookInfo = document.createElement("div");
         bookInfo.className = "book-card";
         bookInfo.style.height = "120px";
         bookInfo.style.width = "230px";
         bookInfo.style.backgroundColor = "green";
         bookInfo.style.padding = "12px";
         bookInfo.style.borderRadius = "10px";
         
         const titleLine =  document.createElement('p');
         titleLine.textContent = `Title: ${book.title}`;

         const authorLine =  document.createElement('p');
         authorLine.textContent = `Author: ${book.author}`;

         const numOfPagesLine =  document.createElement('p');
         numOfPagesLine.textContent = `Pages: ${book.numOfPages}`;

         const isReadLine =  document.createElement('p');
         if (!book.isRead) {
            isReadLine.textContent = "Has this been read yet?: No";
         }
         else {
            isReadLine.textContent = "Has this been read yet?: Yes";
         }
        
          
         bookInfo.appendChild(titleLine);
         bookInfo.appendChild(authorLine);
         bookInfo.appendChild(numOfPagesLine);
         bookInfo.appendChild(isReadLine);

         cardContainer.appendChild(bookInfo);
    }
}

const btn = document.querySelector('.New-Book');
const container = document.querySelector('.container');

btn.addEventListener("click", function() {
    btn.disabled = true;
    const form = document.createElement("form");
    form.setAttribute("id", "myform")

    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.setAttribute("type", "button");
    closeButton.style.top = "2px";
    closeButton.style.right = "10px";
    closeButton.style.background = "transparent";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "1.5rem";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "white";
    closeButton.style.position = "absolute";

    const formContainerWrapper = document.querySelector('.form-container-wrapper');

    closeButton.addEventListener("click", function() {
        form.remove();
        btn.disabled = false; 
    });


    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "titleInput");

    const titleInput = document.createElement("input"); 
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");
    
    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Author: ";
    authorLabel.setAttribute("for", "authorInput");

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("required", "");

    const numOfPagesLabel = document.createElement("label");
    numOfPagesLabel.textContent = "Pages"
    numOfPagesLabel.setAttribute("for", "numOfPagesInput");

    const numOfPagesInput = document.createElement("input");
    numOfPagesInput.setAttribute("type", "number");
    numOfPagesInput.setAttribute("id", "numOfPagesInput");
    numOfPagesInput.setAttribute("name", "numOfPages");
    numOfPagesInput.setAttribute("required", "");

    const isReadLabel= document.createElement("label");
    isReadLabel.textContent = "Have You Read It?"
    isReadLabel.setAttribute("for", "IsReadInput");

    const isReadInput= document.createElement("input");
    isReadInput.setAttribute("type", "checkbox");
    isReadInput.setAttribute("id", "isReadInput");
    isReadInput.setAttribute("name", "isRead");

    const submitButton = document.createElement("button");
    submitButton.className = "submitButton";
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add Book";
    submitButton.style.padding = "10px";
    submitButton.style.color = "white";
    submitButton.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    submitButton.style.border = "3px solid rgba(0, 0, 0, 0.2)";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(document.createElement("br"));
    
    form.appendChild(numOfPagesLabel);
    form.appendChild(numOfPagesInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(isReadLabel);
    form.appendChild(isReadInput);
    form.appendChild(document.createElement("br"));

    form.appendChild(submitButton);
    form.appendChild(closeButton);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;
        const numOfPages = numOfPagesInput.value;
        const isRead = isReadInput.checked;

        addBookToLibrary(title, author, numOfPages, isRead);
        form.remove();
        displayCard();
        btn.disabled = false;
    })

    formContainerWrapper.appendChild(form);
})