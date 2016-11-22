function fizzBuzz(i) {

  if (!(i%15)){
    return("FizzBuzz");
  }
  else if (!(i%5)){
    return("Buzz");
  }
  else if (!(i%3)){
    return("Fizz");
  }
  else {
  	return(i)
  }
}

module.exports = fizzBuzz;
