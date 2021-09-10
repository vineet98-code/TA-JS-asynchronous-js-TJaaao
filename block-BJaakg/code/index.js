(function () {// iffi function - defining and calling at the same time
    
    
    let modalWindow = document.querySelector('.modal-window');
    let modalClose = document.querySelector('.modal-close');
    let openButton = document.querySelector('.btn');
    let booksUL = document.querySelector('.book-list');
    let charactersUL = document.querySelector('.characters');
    let errorElm = document.querySelector('.error-message');
    let listElm = document.querySelector('.list');


    const booksURL = `https://www.anapioficeandfire.com/api/books`;

    function handleErrorMessage(message= 'Something went wrong'){
          listElm.style.display ='none';
          errorElm.innerHTML = message;
    }
    
    function handleSpinner(rootElm, status = false){
        if(status){
            rootElm.innerHTML = `<div class="spinner"><div class="donut"></div></div>`
        }
        
    }
    
    function displayCharacters(characters) {
        handleSpinner(charactersUL, true);
        
        Promise.all(characters.map(character => fetch(character).then(res => res.json())))
        .then(charactersData => {
            
            charactersUL.innerHTML = '';
            
            charactersData.forEach(ch => {
                let li = document.createElement('li');
                li.classList.add('characterList')
                li.innerText = `${ch.name} : {${ch.aliases.join(' ')}}`;
                charactersUL.append(li);
            });
        }) 
    }
    
    function displayBooks(data){
        booksUL.innerHTML = '';
        data.forEach(book => {
            let li = document.createElement('li');
            li.classList.add('card');
            let h3 = document.createElement('h3');
            h3.innerText = book.name;
            let p = document.createElement('p');
            p.innerText = book.authors.join(' ');
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = `Show Characters (${book.characters.length})`;
            
            button.addEventListener('click', () => {
                modalWindow.style.display = 'block';
                displayCharacters(book.characters);
                modalWindow
                .querySelector('.modal-close')
                .addEventListener('click', () => {
                    modalWindow.style.display = 'none';
                });
            });
            li.append(h3, p, button);
            booksUL.append(li);
        })
    }
    
    function fetchBook(){
        handleSpinner(booksUL, true);
        fetch(booksURL)
        .then(res => {
          if(res.ok){
              return res.json()
          } else{
              throw new Error('Response not ok!');
          }
        })
        .then((booksData) => {
            displayBooks(booksData);
        })
        .catch((error) => {
            handleErrorMessage(error);
        })
        .finally(() => {
            handleSpinner(booksUL);// In the both response and reject, the spinner needs to be <stop className=""></stop>
        })
    }
    
    if(navigator.onLine){
        fetchBook();
    }else {
        handleErrorMessage('Check your internet connection ❌');
    }
})();


    


