const btn = document.querySelector('button');
const img = document.querySelector('img');

function clickeffect(){
    
    if(img.attributes[0].value=='bulb.png'){
        img.attributes[0].value = 'on.png'; 
        btn.innerHTML = "OFF";
    }else{
        img.attributes[0].value = 'bulb.png'; 
        btn.innerHTML = "ON";
    }
}