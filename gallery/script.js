var imagesBig = [];
var imagesSmall = [];
const start = 16;
const imagesLength = 202;
const extension = ".jpeg"
const url = "../assets/imgs/gallery/";

for(let i = 16; i < imagesLength + start; i++){
  if (i < 100) {
    imagesBig.push(url+"big/photo0"+i+extension)
  } else {
    imagesBig.push(url+"big/photo"+i+extension)
  }
}

for(let i = 16; i < imagesLength + start; i++){
  if (i < 100) {
    imagesSmall.push(url+"small/photo0"+i+extension)
  } else {
    imagesSmall.push(url+"small/photo"+i+extension)
  }
}

for(let i = 0; i < imagesSmall.length; i++){
  document.getElementById("ImagesGallery").innerHTML += `
    <div class="item cat-1" data-category="transition">
      <div class="item-inner">
          <div class="portfolio-img">
              <div class="overlay-project"></div>
              <img src="${imagesSmall[i]}" alt="recent-project-img-1">
              <div class="project-plus">
                  <a href="${imagesBig[i]}" data-rel="lightcase:myCollection"><i class="fa fa-plus" aria-hidden="true"></i></a>
              </div>
              <div class="recent-project-content">
                  <p><a href="#">Treinamentos</a></p>
              </div>
          </div>
      </div>
    </div>
  `
}

