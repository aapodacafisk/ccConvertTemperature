/* Convert Temperature from kelvin to celsius to fahrenheit */
let kelvin = 293;
console.log(`kelvin: ${kelvin}`)
let celsius = kelvin - 273;
console.log(`celsius: ${celsius}`)
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`fahrenheit: ${fahrenheit}`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`newton: ${newton}`)