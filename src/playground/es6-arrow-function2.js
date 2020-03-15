const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(56, 1, 1000));

const user = {
  name: 'Tyler',
  cities: [
    'Halifax',
    'Kitchener',
    'Toronto'
  ],
  printPlacesLives() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
    
    /* INVALID...
    this.cities.forEach(function(city) {
      console.log(this.name + ' has lived in ' + city);
    });
    ...END */

    /* VALID...
    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    })
    */
  }
};
console.log(user.printPlacesLives());

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(x => x * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
