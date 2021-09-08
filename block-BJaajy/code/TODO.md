- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js

let times = [1,2,3,4];
let timesPromise = times.map((second) => new Promise((res) => {
         setTimeout(() => res(Math.random()), second * 1000);
         })
);

Promise.all((timesPromise).then(console.log);
 

```

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js

const usernames = [
    'gaearon',
    'getify',
    'AArnott',
    'piranha',
    'vineet',
    
  ];
  let userPromise = usernames.map(user => {
     return fetch(`https://api.github.com/users/${user}`)
     .then((res) => res.json())
  });

  Promise.all(userPromise).then((user) => {
    users.forEach((user) => console.log(user.follower))
  })
```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js

let urls = [
   'https://random.dog/woof.json',
   'https://aws.random.cat/meow',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.race(requests).then((res) => res.json());
```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
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
           .then(console.log);
let all = Promise.all([one, two, three])
           .then(console.log);
          //  promise.all work whether the promise is rsolved or not, it will give the list of it.
          //  promise.allSettled will resolve all the promise whther it is resolved or rejected. 
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

Arya
Sam
name :John
```
