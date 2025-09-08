
const items = [
  { title: "Slide 1", img: "./assets/imgs/movies/1.png" },
  { title: "Slide 2", img: "./assets/imgs/movies/2.png" },
  { title: "Slide 3", img: "./assets/imgs/movies/3.png" },
  { title: "Slide 4", img: "./assets/imgs/movies/4.png" },
  { title: "Slide 5", img: "./assets/imgs/movies/5.png" },
  { title: "Slide 6", img: "./assets/imgs/movies/6.png" },
  { title: "Slide 7", img: "./assets/imgs/movies/7.png" },
  { title: "Slide 8", img: "./assets/imgs/movies/8.png" },
  { title: "Slide 9", img: "./assets/imgs/movies/9.png" },
  { title: "Slide 10", img: "./assets/imgs/movies/10.png" },
  { title: "Slide 11", img: "./assets/imgs/movies/11.png" },
  { title: "Slide 12", img: "./assets/imgs/movies/12.png" },
  { title: "Slide 13", img: "./assets/imgs/movies/13.png" },
  { title: "Slide 14", img: "./assets/imgs/movies/14.png" },
  { title: "Slide 15", img: "./assets/imgs/movies/15.png" },
  { title: "Slide 16", img: "./assets/imgs/movies/16.png" },
  { title: "Slide 17", img: "./assets/imgs/movies/17.png" },
  { title: "Slide 18", img: "./assets/imgs/movies/18.png" },
];

let MediaQuery = window.matchMedia("(max-width: 760px)");

let itemsPerSlide = 6;

function cardShow () {
        window.alert("test")
      }


if (MediaQuery.matches) {
  itemsPerSlide = 1
}

// 2. Seleziona tutti i carousel “riutilizzabili”
document.querySelectorAll('.multi-carousel').forEach((carousel, index) => {
  // 2a. Crea un ID univoco e viene applicato al div principale
  const carouselId = `multiCarousel${index}`;
  carousel.id = carouselId;
  carousel.setAttribute("id", carousel.id)

  // 2b. Popola le slide
  const inner = carousel.querySelector('.carousel-inner');
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    const slide = document.createElement('div');
    slide.className = `carousel-item${i === 0 ? ' active' : ''}`;

    // usa row-cols per distribuire N colonne
    const row = document.createElement('div');
    row.className = `row row-cols-1 row-cols-md-${itemsPerSlide} g-0`;

    let currentItems = items.slice(i, i + itemsPerSlide);



    // Se siamo all’ultima slide e mancano elementi, clona i primi
    if (currentItems.length < itemsPerSlide) {
      const missing = itemsPerSlide - currentItems.length;
      currentItems = currentItems.concat(items.slice(0, missing));
    }

    currentItems.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `
          <div class="card h-100">
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">${item.title}</div>
          </div>`;
      row.appendChild(col);

      let cardImgCtn = document.querySelector(".card")

      if (cardImgCtn === null) {
        console.log("variabile cardImg = null")
      } else {

        cardImg = cardImgCtn.children[0]
        console.log(cardImg)


      }

      

    });

    slide.appendChild(row);
    inner.appendChild(slide);
  }



  // 2c. Aggiorna i pulsanti prev/next
  carousel.querySelector('.carousel-control-prev')
    .setAttribute('data-bs-target', `#${carouselId}`);
  carousel.querySelector('.carousel-control-next')
    .setAttribute('data-bs-target', `#${carouselId}`);
});

function ricarica() {
  location.reload()
}




