console.log("conectado");

let toggleLogInOut = document.querySelector("#toggleInOut");
let removeButton = document.querySelector("#btnDefinition");
let likeCat = document.querySelector("#likeCat_1");
let numCat = document.querySelector("#numCat");
let likeDog = document.querySelector("#likeDog_2");
let numDog = document.querySelector("#numDog");
let pressBtn = false;


//Toggle inicio de sesión
toggleLogInOut.addEventListener("click", (e) => {
  if (e.target.innerText === "Iniciar sesión") {
    e.target.innerText = "Cerrar sesión";
  } else {
    e.target.innerText = "Iniciar sesión";
  }
});

//Remover botón
removeButton.addEventListener("click", function (evento) {
  removeButton.remove();
});

//Disparar alarma
likeCat.addEventListener("click", function (evento) {
  if (!pressBtn) alert("Gato Atigrado was liked");
  pressBtn = true;
});

// Incrementar likes
likeCat.addEventListener("click", function (evento) {
  numCat.innerText++;
});

likeDog.addEventListener("click", function (evento) {
  numDog.innerText++;
});
