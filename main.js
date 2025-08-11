const myLibrary = [];

function Book(author, title, numOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (author, title, numOfPages, isRead) {
    let newObject = new Book(author, title, numOfPages, isRead)
    myLibrary.push(newObject);
}

