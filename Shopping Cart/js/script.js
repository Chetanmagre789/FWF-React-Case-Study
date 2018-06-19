var button=document.createElement('button');
 button.textContent='click';
var divNode=document.getElementById('mountNode');

function render(button,divNode){
    divNode.appendChild(button);
}

render(button,divNode);