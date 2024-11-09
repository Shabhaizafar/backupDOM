// event : 
var body = document.body;
var heading1  = document.querySelector('h1');
var i = 1;
function clickingFunction(){
    console.log(`clicked ${i++}`);
    var newBgColor = `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`;
    body.style.backgroundColor = newBgColor;
    console.log(newBgColor);
    heading1.innerHTML = `Body : ${newBgColor}`;
}




// random number Generator : 
// console.log(parseInt(Math.random()*11));   // 0-10

// console.log(`rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`);
