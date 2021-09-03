// Ml-_-pWV6mvp0qJP_8qlbWBCKqjfKWO8TkXJiJka6Yo
// https://api.unsplash.com/photos/random

const img = document.querySelector("img");
const name = document.querySelector("name");
const workingAt = document.querySelector("p");
const followers = document.querySelector("followers");
const Following = document.querySelector("Following");
const input = document.querySelector("input");






input.addEventListener('click', () => {
    
    let xhr = new XMLHttpRequest();

    xhr.open(
        'GET',
        `https://api.unsplash.com/photos/random/?client_id=Ml-_-pWV6mvp0qJP_8qlbWBCKqjfKWO8TkXJiJka6Yo`
    );
    xhr.onload = function () {
        let imageData = JSON.parse(xhr.response);
        img.src = imageData.urls.small;
        name.innerText = imageData.name;
        following.innerText = `Following: ${imageData.following}`;
        followers.innerText = `Followers: ${imageData.followers}`;
        
    };
    xhr.onerror = function () {
        console.log('Something went wrong ...');
    };
    xhr.send();
});

