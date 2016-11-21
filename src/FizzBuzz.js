function fizzBuzz(i) {
  var nombre = parseInt(prompt("Entrez un nombre supérieu ou égal à 1:"));

  if (!(nombre%3)){
    return("Fizz");
  }
  else if (!(nombre%5)){
    return("Buzz")
  }
  else if (!(nombre%15)){
    return("FizzBuzz")
  }
  else {
  	return("J'ai dis un nombre supérieur ou égal à 1...")
  }
}

module.exports = fizzBuzz;
