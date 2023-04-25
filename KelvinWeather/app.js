//Temp in Kelvin
const kelvin = 0;

// Convert to Celsius
const celsius = kelvin - 273;

// Convert Cel to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Convert Cel to Newton
let newton = celsius * (33 / 100);

// Floor temp conversion
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degress Newton.`);
