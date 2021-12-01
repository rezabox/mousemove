const container = document.querySelector('#container');

window.onmouseout=function(e){
   let x= e.clientX /2;
   let y= e.clientY /2;
   container.style.backgroundPositionX = x + "px";
   container.style.backgroundPositionY = y + "px";
}