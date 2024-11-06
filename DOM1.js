//Object : 
// var obj = {
//     //key     value   = property
//     fname : "Raj",
//     address : {
//         city : "GNR"
//     }
// }
//Access Object property : 

// console.log(obj.fname);
// console.log(obj['fname']);

//Access inner Object Propert : 
// console.log(obj.address.state);


// DOM Object
// console.log(document);


//Access  DOM Object property : 
// console.log(document.head);
// console.log(document['body']);

// Showing Error  : Becuase  we cann't trrite property as an Object.
// console.log(document.body.h1);
//////////////////////////////////////////
// How to Access HTML Element Using A JS : 

// 1) using id : 
    //getElementById()  :   inBuilt Method : DOM
// console.log(document.getElementById('heading1'));
// console.log(document.getElementById('heading2'));


// 2) using class : 
    //getElementByClassName()  :   inBuilt Method : DOM
// console.log(document.getElementsByClassName('class1'));
// console.log(document.getElementsByClassName('class1')[0]);

// var Arr = [11,12,13,14];
// console.log(Arr);
// console.log(Arr[1]);


// 3) using element : 
    //getElementByTagName()  :   inBuilt Method : DOM
// console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByTagName('p')[1]);
// console.log(document.getElementsByTagName('p')[0]);



// 4) using queryselector :
// 5) using queryselectorAll :