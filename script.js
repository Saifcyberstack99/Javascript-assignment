// Get output element
const output = document.getElementById('output');

// Function to display output
function display(text) {
    output.innerHTML += text + '<br>';
}

// Function to clear output
function clearOutput() {
    output.innerHTML = '';
    display('Output cleared. Ready for new examples.');
}

// Function to run all examples
function runAll() {
    clearOutput();
    display('=== Running All Examples ===');
    showNumber();
    showString();
    showBoolean();
    showUndefined();
    showNull();
    showObject();
    showArray();
    showFunction();
}

// Example Functions
function showNumber() {
    let age = 25;
    let price = 99.99;
    let bigNum = 1000000;
    
    display('=== NUMBER TYPE ===');
    display(`let age = ${age}; // Type: ${typeof age}`);
    display(`let price = ${price}; // Type: ${typeof price}`);
    display(`let bigNum = ${bigNum}; // Type: ${typeof bigNum}`);
    display('');
}

function showString() {
    let name = "John";
    let city = 'Mumbai';
    let greeting = `Hello ${name}`;
    
    display('=== STRING TYPE ===');
    display(`let name = "${name}"; // Type: ${typeof name}`);
    display(`let city = '${city}'; // Type: ${typeof city}`);
    display(`let greeting = \`${greeting}\`; // Type: ${typeof greeting}`);
    display('');
}

function showBoolean() {
    let isStudent = true;
    let hasCar = false;
    let isAdult = (age >= 18);
    
    display('=== BOOLEAN TYPE ===');
    display(`let isStudent = ${isStudent}; // Type: ${typeof isStudent}`);
    display(`let hasCar = ${hasCar}; // Type: ${typeof hasCar}`);
    display(`10 > 5 = ${10 > 5}; // Type: ${typeof (10 > 5)}`);
    display('');
}

function showUndefined() {
    let x;
    let y = undefined;
    
    display('=== UNDEFINED TYPE ===');
    display(`let x; // Value: ${x}, Type: ${typeof x}`);
    display(`let y = undefined; // Value: ${y}, Type: ${typeof y}`);
    display('');
}

function showNull() {
    let y = null;
    
    display('=== NULL TYPE ===');
    display(`let y = null; // Value: ${y}, Type: ${typeof y}`);
    display('Note: typeof null shows "object" (JavaScript bug)');
    display('');
}

function showObject() {
    let person = {
        name: "Rahul",
        age: 25,
        city: "Delhi"
    };
    
    display('=== OBJECT TYPE ===');
    display(`let person = {`);
    display(`  name: "${person.name}",`);
    display(`  age: ${person.age},`);
    display(`  city: "${person.city}"`);
    display(`};`);
    display(`Type: ${typeof person}`);
    display(`person.name = "${person.name}"`);
    display('');
}

function showArray() {
    let fruits = ["Apple", "Banana", "Mango"];
    let numbers = [1, 2, 3, 4, 5];
    
    display('=== ARRAY TYPE ===');
    display(`let fruits = ["${fruits.join('", "')}"]`);
    display(`Type: ${typeof fruits}`);
    display(`Is Array? ${Array.isArray(fruits)}`);
    display(`fruits[0] = "${fruits[0]}"`);
    display(`Total fruits: ${fruits.length}`);
    display('');
}

function showFunction() {
    function greet(name) {
        return `Hello, ${name}!`;
    }
    
    let add = function(a, b) {
        return a + b;
    };
    
    display('=== FUNCTION TYPE ===');
    display(`function greet(name) {`);
    display(`  return "Hello, " + name + "!";`);
    display(`}`);
    display(`Type: ${typeof greet}`);
    display(`greet("John") = "${greet("John")}"`);
    display('');
    
    display(`let add = function(a, b) {`);
    display(`  return a + b;`);
    display(`};`);
    display(`Type: ${typeof add}`);
    display(`add(5, 3) = ${add(5, 3)}`);
    display('');
}

// Initial message
display('Click buttons to see examples or "Run All Examples"');