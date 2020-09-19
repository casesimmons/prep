// const { get } = require('../server/routes');

const body = document.querySelector('body');
const div = document.createElement('div');

// TITLE
const h1 = document.createElement('h1');
h1.innerHTML = '<i>Tiny-To-Do</i>';
h1.className = 'h1text';
div.appendChild(h1);

// LIST EXAMPLE
// const items = ['lilly', 'emmett', 'tabitha'];
// const list = document.createElement('ul');
// for (let el of items) {
//   const li = document.createElement('li');
//   li.innerText = el;
//   list.appendChild(li);
// }
// div.appendChild(list);

// BUTTON TO GET ALL ENTRIES IN DB
const getButton = document.createElement('button');
getButton.innerText = 'GET TODO LIST';
getButton.type = 'button';
getButton.addEventListener('click', () => {
  fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ', data);
      const totalList = document.createElement('div');
      for (let el of data) {
        const div = document.createElement('div');
        for (let key in el) {
          const innerP = document.createElement('p');
          innerP.innerText = el[key];
          div.appendChild(innerP);
        }
        totalList.appendChild(div);
      }
      body.appendChild(totalList);
    })
    .catch((err) => console.log(err));
});
div.appendChild(getButton);

// APPEND MAIN DIV TO BODY
body.appendChild(div);
