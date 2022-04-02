function afficherDonnee(i) {
    let counter0 = 0;
          setInterval(() => {
      if(counter0 == donnee[i]){
          clearInterval();
      }else{
        counter0 += 1;
        number[i].innerHTML = counter0 + "%";
      } 
  }, 30)};