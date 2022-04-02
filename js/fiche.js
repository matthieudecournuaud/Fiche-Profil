const divliquide = document.querySelectorAll(".liquid");
const divliquidtest = document.querySelectorAll(".liquidtest");
const valeur = ["25", "25", "50", "25", "100", "75", "50", "25"];

for (let i = 0; i < valeur.length; i++) {
  const valeurcontainer = document.createElement('div');
  divliquidtest[i].appendChild(valeurcontainer);      // il y a un [i] après divliquidtest car la boucle créer 4 divs avec index[0][1]...
  valeurcontainer.innerText = valeur[i] + "%";
};

const divenfant = document.querySelectorAll('.liquidtest > div');

divliquide.forEach(function (element, index) {
  element.addEventListener('mouseenter', function () {

    if (divenfant[index].innerText == valeur[index] + "%") {
      console.log(valeur[index] + "cooooool");
      this.classList.add('position' + valeur[index]);
    };
  });

  element.addEventListener('mouseleave', function () {

    this.classList.remove('position' + valeur[index]);
  });
});