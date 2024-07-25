console.log("conectado");

let likeBtn = document.querySelector(".btnLike");
let spanLike = document.querySelector(".spanLike");
let btnLike_2 = document.querySelector(".btnLike_2");
let spanLike_2 = document.querySelector(".spanLike_2");
let btnLike_3 = document.querySelector(".btnLike_3");
let spanLike_3 = document.querySelector(".spanLike_3");


likeBtn.addEventListener("click", function (evento) {
  spanLike.innerText++;
});
btnLike_2.addEventListener("click", function (evento) {
    spanLike_2.innerText++;
  });
  btnLike_3.addEventListener("click", function (evento) {
    spanLike_3.innerText++;
  });
