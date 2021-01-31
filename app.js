// console.log('study hard');
// console.log(7 - 2);

// var userName = 'mohammad';
// console.log(userName);

// var x = 5;
// console.log(x >= 5 );

// alert('fight');

function niceDay(){ 

var levelNow = prompt('what level filght');
var message = '';

console.log(levelNow);

if (levelNow <= 35 && levelNow >= 18) { message = 'very high'; }

else if (levelNow < 18 && levelNow > 5) { message = 'in the cloud' }
else if (levelNow <= 5) { message = 'to law' }

else { message = 'bye bye' }

document.write('<h2>' + message + '</h2>');

var order = prompt('what colore you want blue or black?');

//order = red

while (order !== 'blue' && order !== 'black') {
    order = prompt('what colore you want blue or black?');
}
var colore = '';

var imageNum = prompt('how many images do you want to print?');

for(var i = 1 ; i <= imageNum; i++){
    if (order === 'blue') { colore = '<img src="images/blue.jpg"/>' }


    else if (order === 'black') { colore = '<img src="images/black.jpg" />' };

    
    document.write(colore);
}

}

niceDay(); 









