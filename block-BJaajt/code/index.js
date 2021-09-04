let input = document.querySelector("input");
let info = document.querySelector(".info");

let userImage = document.querySelector('.info img');
let userName = document.querySelector('.info h3');
let userLogin = document.querySelector('.info p');

let followerUL = document.querySelector(".followers");
let followingUL = document.querySelector(".following");



function fetch(url, successHandler){
   let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));

    xhr.onerror = function () {
       console.error('Something went wrong');
    };
    xhr.send();
}

function handleDisplay(userInfo){
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;
    userName.innerText = userInfo.name;
    userLogin.innerText = '@' + userInfo.login;

    displayExtraInfo(
        `https://api.github.com/users/${userInfo.login}/followers`,
         followerUL);
    displayExtraInfo(
        `https://api.github.com/users/${userInfo.login}/following`
        , followingUL);
}

function handleInput(event){
   if(event.keyCode === 13 && input.value){
       const url =  `https://api.github.com/users/`;
       let username = input.value;

       fetch(url + username, handleDisplay)
       input.value = '';
   }
}
input.addEventListener('keydown', handleInput);



function displayExtraInfo(url, roortElm){
    roortElm.innerHTML = '';

    fetch(url, function (followerList){
    let topFive = followerList.slice(0, 5);
      
      topFive.forEach(info => {
          let li = document.createElement('li');
          let img = document.createElement('img');
          img.src = info.avatar_url;
          img.alt = info.name;
          li.append(img);
          roortElm.append(li);
        });
    });
}

function displayExtraInfo(url, roortElm){
    roortElm.innerHTML = '';

    fetch(url, function (followingList){
    let topFive = followingList.slice(0, 5);
      
      topFive.forEach(info => {
          let li = document.createElement('li');
          let img = document.createElement('img');
          img.src = info.avatar_url;
          img.alt = info.name;
          li.append(img);
          roortElm.append(li);
        });
    });
}


//  CAts

let catsImage = document.querySelector(".cats img");
let catsButton = document.querySelector(".cats button");

function handleClick() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1&size=full', 
    function(catInfo){
        catsImage.src = catInfo[0].url;

    });
}    
catsButton.addEventListener('click', handleClick);


