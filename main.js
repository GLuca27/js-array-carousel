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
for( let i = 0; i < images.length; i++ ){
    const srcImg = images[i];
    //creo l'elemento
    const item = document.createElement("div");
    item.classList.add("item");
     if ( i === 0 ){
        item.classList.add("active")
     }
     item.innerHTML = `
          <img src="${srcImg}" alt="">
     `;

     items.append(item);
}

document.querySelector(".item").classList.add("active");

let currentImageIndex = 0;

// seleziono e aggiungo evento click a next (1o metodo che vale anche per prev)
const nextBtn = document.querySelector(".next");
 nextBtn.addEventListener("click", function(){
   items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === 0 ){
       currentImageIndex = images.length - 1;
    } else {
       currentImageIndex++;
    }
   items[currentImageIndex].classList.add("active");
 })

 //seleziono e aggiungo l'evento click al pulsante prev (2o metodo che vale anche per next)
 
const prevBtn = document.querySelector(".prev");
 prevBtn.addEventListener("click", function(){
   items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === 0 ){
       currentImageIndex = images.length - 1;
    } else {
       currentImageIndex--;
    }
   items[currentImageIndex].classList.add("active");
 })


