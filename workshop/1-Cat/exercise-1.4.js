// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  // - Write a sleep method that accept hours and reduces tiredness by 5 times
  //   that number. So if the cat has a tiredness of `50`, and sleeps for 10
  //   hours, their tiredness will be reduced to 0 (10 * 5).
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += 3;
  };
  // - Write an eat method that accept number of kibbles and reduces hunger by 1/5
  //   that number.
  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness = this.happiness * (10 * kibbles);
  };
  // - Write an play method that accept minutes and reduces loneliness by 3 times
  //   that number.
  play = (minutes) => {
    this.loneliness -= 3 * minutes;
    this.happiness += 30;
  };
  //    In real life, we naturally get more tired/hungry/lonely as time passes.
  //    Let's add a new method, `wait`. It accepts a number of minutes as the
  //    parameter. The cat's tiredness, hunger, and loneliness should increase
  //    as the amount of time increases. They should also become less happy.
  wait = (minutes) => {
    this.tiredness += minutes;
    this.hunger += (1 / 3) * minutes;
    this.loneliness += 5 * minutes;
    this.happiness -= 2 * minutes;
  };
}

boots = new Cat("Boots", "siamese");
console.log(boots);

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);

console.log(boots);
