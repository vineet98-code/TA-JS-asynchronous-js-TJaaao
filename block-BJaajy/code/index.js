const five = new Promise((res, rej) => {
    setTimeout(() => res(5), 1000);
});
const hello = new Promise((res, rej) => {
    setTimeout(() => res('hello'), 2000);
});
const superHuman = new Promise((res, rej) => {
    setTimeout(() => res('superHuman'), 3000);
});
const error = new Promise((res, rej) => {
    setTimeout(() => res('Error'), 4000);
});


let all = Promise.all([five, hello, superHuman])
    .then((res) => console.log(res))
    .catch((rej) => console.error(error));
    
    
const usernames = [
   'gaearon',
   'getify',
   'AArnott',
   'piranha',
   'vineet',
];
        
usernames.forEach(user => {
        fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((info) => console.log(info.followers))
    });
            

// 




let urls = [
    'https://random.dog/woof.json',
    'https://aws.random.cat/meow',
   'https://api.github.com/users/jeresig'
 ];
 
 let requests = urls.map(url => fetch(url));
 
 let race = Promise.race(requests).then((res) => res.json());



const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

let allSettled = Promise.allSettled([one, two, three])
    .then((res) => console.log(res))
    .catch((rej) => console.error(error));