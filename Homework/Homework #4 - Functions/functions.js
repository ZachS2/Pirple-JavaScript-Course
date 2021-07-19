let men = ["Alejandro", "Socrates", "Steve"];

const isMortal = (name) => {
  let isManMortal = false;
  men.forEach( (man) => {
    if (man === name) {
      isManMortal = true;
    }
  });
  return isManMortal;
};

if (isMortal("Socrates")) {
  console.log("Socrates is mortal.");
} else {
  console.log("Socrates is not mortal.");
}

const cake = (possibilities = [], isChocolate = false) => {
  const option = (isChocolate === true) ? 1 : 0;
  return "The cake is " + possibilities[option] + ".";
}

console.log(cake(["vanilla", "chocolate"], false));
