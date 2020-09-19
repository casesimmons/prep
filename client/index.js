const body = document.querySelector('body');

// CREATE DIV USING CREATE ELEMENT
const div = document.createElement('div');

// INNERHTML ALLOWS FOR ACTUAL HTML CODE
div.innerHTML = '<b>Hello Fren</b>';

// APPEND DIV TO BODY
body.appendChild(div);

const ol = document.createElement('ol');
const li = document.createElement('li');

li.innerHTML = '<i>List item 1</i>';
ol.appendChild(li);
div.appendChild(ol);
