const searchField = document.getElementById('search-field');
const searchResult =document.getElementById('search-result');
const input = document.getElementById('snackbar');
const searchFood=()=>{
    const searchText =searchField.value;
    searchField.value= "";
    let  text = "please input value"
    input.textContent="";
    if(searchText ==''){
      input.innerHTML=text;

    }
    else {
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then (data=>displaySearchResult(data.docs));
    }
    
}

const displaySearchResult=books=>{
   let  text = "please input valid value "
   searchResult.textContent="";
   input.textContent="";

   if(books==null){
    input.innerHTML=text;
   } 
   else{
    books.forEach(book=> {
      const cover_i = searchField.value;
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div " class="card h-100 ">
      <img src= "https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">author name:${book.author_name}</p>
        <p class="card-text">fast publish date :${book.first_publish_year}</p>
        <p class="card-text">publish year:${book.publish_year}</p>
      </div>
    </div>
      
      `
      searchResult.appendChild(div);
  });
   }
   
}

