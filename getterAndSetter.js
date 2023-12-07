//import { makeList } from "./templateLiteral";
const makeList = require ('./templateLiteral')

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);


// Only change code below this line
class Thermostat {
    constructor (num){
      this._num = num;
    }   
    
    get temperature () {
       return 5/9 * (this._num - 32);;  
     } 

    set temperature (newNum) {
        this._num = newNum;
     }
  }
  
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);

  console.log(makeList(["max-length", "no-amd", "prefer-arrow-functions"]));

  console.log(0 || 1 && 2 || 3)