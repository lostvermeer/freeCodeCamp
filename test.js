const obj = {
    x: 10,
    y: 20
}

const prop = Object.keys(obj).reverse().join('')

obj.xy = 30;
obj.yx = 40;
obj.x10y20 = 50;
obj.y20x10 = 60;


console.log(prop) 
const result  = obj[prop];

console.log(obj);
console.log(result);


console.log('------------------------');


let a = 10;
a.b = 10;
console.log(a)

console.log('------------------------');

const s1 = ['a', 'b', 'c'];
const s2 = ['d', 'e', 'f'];

const result2 = s1.concat(s2).join('+')

console.log(result2);

console.log('------------------------');

var x = 10;

function bar (funArg) {
    var x = 30;
    x = 50
    console.log("bar",x)
    //funArg();
}

function foo () {
    console.log("foo",x);
}

foo.x=20
bar.x=40
bar(foo)
foo(bar())


console.log(x)


console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
console.log('------------------------');



const map = new Map();

map.set('0', '1');
map.set('s2', '2s');
map.set('3s', 's3');

const arr = [...map.values()];
const result3 = arr.map(value => parseInt(value, 10));

console.log(result3);