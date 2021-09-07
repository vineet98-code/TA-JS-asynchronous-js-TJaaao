const url = 'https://api.unsplash.com/photos/?client_id=s5HI_Vnh7s7JOMaP4p4dgJ31PGwIACga9dUC2w6D2F4';

const getSearchUrl = (query) =>
  `https://api.unsplash.com/search/photos?&query=${query}&client_id=Ml-_-pWV6mvp0qJP_8qlbWBCKqjfKWO8TkXJiJka6Yo `;

const root = document.querySelector(".images");
const searchElm = document.querySelector("input");


// function fetch(url, successHandler){
//     let xhr = new XMLHttpRequest;
//     xhr.open('GET', url);
//     xhr.onload = () => successHandler(JSON.parse(xhr.response));

//     xhr.onerror = function(){
//         console.error('Something went wrong');
//     };
//     xhr.send();
// }

function displayImage(images){
    root.innerHTML = '';

    images.forEach(image => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = image.urls.thumbs;
        li.append(img);
        root.append(li);
    });
}

fetch(url).then(displayImage).catch((error) => console.log(error));



function handleSearch(event){
   if(event.keyCode === 13 && searchElm.value){
        fetch(getSearchUrl(searchElm.value)).then(searchResult => {

            displayImage(searchResult.results);
        }).catch((error) => console.log(error));
        searchElm.value = '';
    }
}
searchElm.addEventListener('keyup', handleSearch)

//  Promise start
function fetch(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(JSON.parse(xhr.response)); // onload accepts function reference
        xhr.onerror = () =>  reject('Something went wrong'); // onload accepts function reference
        xhr.send();
    });
}


