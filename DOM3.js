// DOM ? 
// How to Access HTML Element Using JS ? 

// How to Access Content of HTML ELement :
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('div'));

// 1) innerHTML :
// console.log(document.querySelector('h1').innerHTML);
// console.log(document.querySelector('div').innerHTML);  // tag with text + spaces


// 2) innerText : 
// console.log(document.querySelector('h1').innerText);
// console.log(document.querySelector('div').innerText); // text without space

// 3) textContent : 
// console.log(document.querySelector('h1').textContent);
// console.log(document.querySelector('div').textContent); // text with spaces



/////////////////////////////
// How to Modify HTML Content Using JS :

document.querySelector('h1').innerHTML = "This is a New Heading!!";
document.querySelector('p.class1').innerText = "This One Added!!";
document.querySelector('#heading2').textContent = "CSS";




// 
// How to Add New Element in a HTML using a JS ? 
// how to Change CSS using JS ? 