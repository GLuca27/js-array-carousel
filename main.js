//creiamo l'array con gli oggetti
const images = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

//seleziono il contenitore delle immagini
const items = document.querySelector(".items")

//ciclo sull'array delle immagini
for ( let i = 0; i < images.length; i++ ){
    const srcImg = images[i];
    //creo l'elemento
    const item = document.createElement("div");
    item.classList.add("item");
     if ( i === 0 ){
        item.classList.add("active")
     }
     item.innerHTML = `<img src"${srcImg}" alt"">`;

     items.append(item);
}


