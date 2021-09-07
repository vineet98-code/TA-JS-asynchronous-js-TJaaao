const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

let newsElm = document.querySelector('.news');
let select = document.querySelector('select');
let allNews = [];

function renderNews(news){
  newsElm.innerHTML = '';

  news.forEach(newsItems => {
      let li = document.createElement('li');

      let img = document.createElement('img');

      img.src = newsItems.imageUrl;
      img.alt = newsItems.title;

      let div = document.createElement('div');
      let span = document.createElement('span');
      span.classList.add('source');

      span.innerText = newsItems.newsSite;
  
      let h3 = document.createElement('h3');
      h3.innerText = newsItems.title;

      let a = document.createElement('a');
      a.href= newsItems.url;
       
      let button = document.createElement('button');
      a.append(button);
      button.innerText = 'Read More';

      div.append(span, h3, a);
      li.append(img, div);
      newsElm.append(li);
    });
}

function displayOptions(sources){
   sources.forEach(source => {
     let option  = document.createElement("option");
     option.innerText = source;
     option.value = source;
     select.append(option);
    });
}
fetch(url)
  .then(res => res.json())
   .then((news) => {
       console.log(news);
       allNews = news;
       renderNews(news);

       let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
       displayOptions(allSources);
   });

select.addEventListener('change', (event) => {
  let source = event.target.value.trim();
  if(source){
    var filteredNews = allNews.filter(news => news.newsSite === source) 

  } else{
    filteredNews = allNews;
  }
  renderNews();
})