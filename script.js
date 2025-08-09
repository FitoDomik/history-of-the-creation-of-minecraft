//import fs from 'fs'
//import * as fs from 'node:fs/promises';
//import * as fs from "node:fs";
//const fs = require('fs');

const adm1 = ['admin', '123234'];
let links = document.querySelectorAll('.scroll');
let signIn = document.querySelector('.signIn');
let log = document.querySelector('.log');
let admin = 0

let targetID;
links.forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault()
    targetID = element.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})


input_values = ['dar']
window.addEventListener('load', function() {
  console.log('всё норм');
});

try{
  log.addEventListener("click", handle);
} catch {console.log('0')}

let error = document.querySelector('.error');
function handle() {
  console.log('ok');
  let inputs = document.querySelectorAll("input");
  let input_values = [];
  for (let i = 0; i < inputs.length; i++) {
      input_values.push(inputs[i].value);
  }
  signIn.setHTML = input_values[0];
  if ((input_values[0] == adm1[0]) & (input_values[1] == adm1[1])) {
    console.log('admin');
    window.location.href = 'remark.html';
  } else {
    error.textContent = 'Неверный логин или пароль!';
  }
  
}


let burger = document.querySelector('.menu_small_icon');
let smmenu = document.querySelector('.menu_small_item');
smmenu.style.transform = 'translateX(-100%)';
burger.addEventListener('click', function () {
  console.log('click')
  if (smmenu.style.transform == 'translateX(-100%)') {
    anime({
      targets: ".menu_small_item",
      translateX: ['-100%', '0%'],
      easing: "easeInOutQuad",
      direction: "alternate",
      duration: 100,
      loop: false
    })
  } else {
    anime({
      targets: ".menu_small_item",
      translateX: ['0%', '-100%'],
      easing: "easeInOutQuad",
      direction: "alternate",
      duration: 100,
      loop: false
    })
  }
})

let img = document.querySelectorAll('img');
img.forEach(function (element) {
  element.addEventListener('mouseover', function() {
    anime({
      targets: element,
      scale: 1.3,
      easing: "easeInOutQuad",
      duration: 300,
    })
  })
  element.addEventListener('mouseout', function() {
    anime({
      targets: element,
      scale: 1,
      easing: "easeInOutQuad",
      duration: 300,
    })
  })
});


let text = document.querySelectorAll('article>p, article>h1, article>h2, article>h3, article>ul')

document.addEventListener('DOMContentLoaded', function() {

  function checkBlocksVisibility() {
      let windowHeight = window.innerHeight;

      text.forEach(function (element) {
          let blockPosition = element.getBoundingClientRect().top;

          if (blockPosition <= windowHeight - 100) {
              element.style.opacity = "1";
              element.style.transform = "translateX(0)";
          }
      });
      img.forEach(function (element) {
        let blockPosition = element.getBoundingClientRect().top;

        if (blockPosition <= windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }
    });
  }

  checkBlocksVisibility();

  window.addEventListener('scroll', function() {
      checkBlocksVisibility();
  });
});

