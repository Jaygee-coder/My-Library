let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
}

const cancelBtn = document.querySelector('.cancel');
const uploadBtn = document.querySelector('.upload');
const addBook = document.querySelector('.addBook');
const modal = document.querySelector('.modal');

addBook.addEventListener('click', function(){
    modal.classList.add('active');
});

function addBookToLibrary(title, author, pages, readStatus) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#read").checked;

    if(title == "" || author == "" || pages == "" || readStatus == ""){
        
    }
}

function uploadBook(title, author, pages, readStatus){
    uploadBtn.addEventListener('click', function(){
        let newBook = new Book(title, author, pages, readStatus)
        newBook.push(myLIbrary);
        newBookRender(newBook);
    })
}

cancelBtn.addEventListener('click', function(){
    modal.classList.remove('active');
});

addBook("Shelly and Curts", "Jaygee Robi", 356, "Finished");
addBook("The Adventures of Reiny The Boo", "Jackie R. Chan", 500, "In Progress");
addBook("God Infinitely Is", "John Piper", 600, "Finished");
addBook("The Word In The Beginning", "Shai Linne", 220, true);