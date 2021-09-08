let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30';

let display = document.querySelector('.display');

let source = document.querySelector('.source');
let isLoading = false;


    var data = fetch(url).then((res) => {
               if(!res.ok){
                  throw new Error(`Error happened: ${res.status}`);
               }
               return res.json();
            });



function handleSpinner(){
    if(isLoading){
        display.innerHTML = `<div class="donut"></div>`
    }
}


function handleChange(event) {
  console.log(event);
  document.querySelector('.display').innerHTML = '';

  data.then((userData) =>
    userData.forEach((data) => {
      console.log(data.newsSite, event.target.value);
      if (data.newsSite == event.target.value) {
        createUI(data);
      }
    })
  );
}

source.addEventListener('change', handleChange);

function init(){
    isLoading = true;
    handleSpinner();
    data.then((userData) => userData.forEach((data) => createUI(data))).catch((error) => {
        display.innerText = error;
    });
}
init();

function createUI(arg) {
  console.log(arg);

  let div = document.createElement('div');
  let aside = document.createElement('aside');
  let articleImage = document.createElement('img');
  let article = document.createElement('article');
  let categoryPara = document.createElement('p');
  let articleHeading = document.createElement('h3');
  let readMore = document.createElement('a');

  div.setAttribute('class', 'flex');
  readMore.innerText = 'READ MORE';
  articleImage.src = arg.imageUrl;
  articleHeading = arg.title;
  categoryPara.innerText = arg.newsSite;
  readMore.href = arg.url;

  aside.append(articleImage);
  article.append(categoryPara, articleHeading, readMore);
  div.append(aside, article);
  display.append(div);
}