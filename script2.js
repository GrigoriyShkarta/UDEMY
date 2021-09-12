'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.prepend(div);

// hearts[0].after(div);

// circles[0].remove();

div.innerHTML = "<h1>Hello world!</h1>";

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");