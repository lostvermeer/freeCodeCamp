//Use the Rest Parameter with Function Parameters >>>>>TOPIC 1
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1,2,3,4))

  


  // Use the Spread Operator to Evaluate Arrays In-Place >>>>>TOPIC 2
  let a = [1,2,3,4,67]
  console.log(Math.max.apply(null, a)) // or you can write ->
  console.log(Math.max(...a))




 // Use Destructuring Assignment to Extract Values from Objects >>>>>TOPIC 3
{ 
 const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
// instead of two lines above you can use one line below
const {today , tomorrow} = HIGH_TEMPERATURES;

console.log("Topic 3 >>>>" + today + ' ' + tomorrow)

}


{
//Use Destructuring Assignment to Assign Variables from Objects >>>>>TOPIC 4

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line

const { yesterday: day1, today: day2 } = HIGH_TEMPERATURES;
console.log(day1, day2);

}

{
//Use Destructuring Assignment to Assign Variables from Nested Objects >>>>>TOPIC 5

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
  
const {today: { low: lowToday, high: highToday }} =  LOCAL_FORECAST;
console.log(lowToday, highToday)

}


{
//  Use Destructuring Assignment to Assign Variables from Arrays  >>>>>TOPIC 6

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);


let a = 8, b = 6;
// Only change code below this line
[a,b] = [b, a]
console.log(a,b);

}


{
  //Destructuring via rest elements   >>>>>TOPIC 7

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);

function removeFirstTwo(list) {
  const [a,b, ...arr] = list;
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

}

{
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min, ...args}) => {
    return(stats.max + stats.min) / 2.0;
    }
    console.log(half(stats))
  // Only change code above this line
}