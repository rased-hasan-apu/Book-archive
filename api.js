const searchField = document.getElementById('search-field');
const searchResult =document.getElementById('search-result');
const getinput = document.getElementById('getInput');
const searchFood=()=>{
    const searchText =searchField.value;
    searchField.value= "";
    let  text = "please input value"
    getinput.textContent="";
    if(searchText ===''){
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
   getinput.innerHTML="";
   
   if(books===null){
    getinput.innerHTML=text;
   } 
   else{
    books.forEach(book=> {
      getinput.innerHTML = ` total book: ${books.length}`;
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div " class="card h-100 ">
      <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">author name:${book.author_name}</p>
        <p class="card-text">publisher name:${book.publisher}</p>
        <p class="card-text">fast publish date :${book.first_publish_year}</p>
      </div>
    </div>
      
      `
      searchResult.appendChild(div);
  });
   }
   
}


