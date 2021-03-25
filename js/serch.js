let loupe = document.getElementById('loupe');

let serch = document.getElementById('serch');

loupe.addEventListener('click', function(){ 
    serch.classList.toggle('display-block');
});

let dropdown = document.getElementById('dropdown');

let list = document.getElementById('list');

dropdown.addEventListener('click', function(){ 
    list.classList.toggle('display-block');
});

let dropdown2 = document.getElementById('dropdown2');

let list2 = document.getElementById('list2');

dropdown2.addEventListener('click', function(){ 
    list2.classList.toggle('display-block');
});

let dropdown3 = document.getElementById('dropdown3');

let list3 = document.getElementById('list3');

dropdown3.addEventListener('click', function(){ 
    list3.classList.toggle('display-block');
});