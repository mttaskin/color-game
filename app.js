const changeColor = function (color) {
    let b = '';
for( let i=0; i <3;i++ ){
  let a = Math.floor(Math.random()*255)
b += a + ','
c= b.slice(0,b.length-1)
}
console.log(`rgb(${c})`)}
const btn = document.querySelector('button')
btn.onmouseover = function () {
    btn.style.backgroundColor = 'changeColor';}
