// Ml-_-pWV6mvp0qJP_8qlbWBCKqjfKWO8TkXJiJka6Yo
// https://api.unsplash.com/photos/random

const img = document.querySelector("img");
const reload = document.querySelector('button');



reload.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open(
        'GET',
        `https://api.unsplash.com/photos/random/?client_id=Ml-_-pWV6mvp0qJP_8qlbWBCKqjfKWO8TkXJiJka6Yo`
    );
    xhr.onload = function () {
        let imageData = JSON.parse(xhr.response);
        img.src = imageData.urls.small;
        
    };
    xhr.onerror = function () {
        console.log('Something went wrong ...');
    };
    xhr.send();
});

