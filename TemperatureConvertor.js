//Program to convert the temperature to and from Fahrenheit to Celsius

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return `${celsius}°C is ${fahrenheit}°F`;
}

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return `${fahrenheit}°F is ${celsius}°C`;
}

// Example usage
console.log(celsiusToFahrenheit(60)); // Output: 60°C is 140°F
console.log(fahrenheitToCelsius(45)); // Output: 45°F is 7.222222222222222°C
