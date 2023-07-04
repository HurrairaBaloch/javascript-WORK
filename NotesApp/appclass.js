class Book{


    constructor(name, author, type) {
        
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book)
    {

     console.log("adding");
     let tablebody = document.getElementById("tablebody");
     let show = ` <tr>
     
     <td>${book.name}</td>
      <td>${book.author}</td>
      <td>@${book.type}</td>
    </tr>`;
     tablebody.innerHTML += show;

    }
    clear() {
          let form = document.getElementById("myform");
          form.reset();
    }

}

let form = document.getElementById("myform");
form.addEventListener("submit", libraryformsubmit);

function libraryformsubmit(e) {
  e.preventDefault();
  let name = document.getElementById("book").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }


  
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
}