// 1. Intercambio de Valores
function intercambiarValores() {
  let a = 5;
  let b = 10;
  const temp = a;
  a = b;
  b = temp;
  document.getElementById('intercambio-output').textContent = `a: ${a}, b: ${b}`;
}

// 2. Determinar el Mayor de Dos Números
function buscarElMayor() {
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);
  const resultado = numero1 > numero2 ? numero1 : numero2;
  document.getElementById('mayor-output').textContent = `El mayor es: ${resultado}`;
}

// 3. Determinar si un Número es Par o Impar
function parOImpar() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = numero % 2 === 0 ? 'par' : 'impar';
  document.getElementById('par-impar-output').textContent = `El número es ${resultado}`;
}

// 4. Calcular Precio con Descuento
function calcularPrecio() {
  const precio = parseFloat(document.getElementById('precio').value);
  const porcentajedescuento = parseFloat(document.getElementById('porcentajedescuento').value);
  const precioFinal = precio - (precio * porcentajedescuento / 100);
  document.getElementById('precio-output').textContent = `Precio final: $${precioFinal.toFixed(2)}`;
}

// 5. Calcular Área del Círculo
function calcularArea() {
  const radio = parseFloat(document.getElementById('radio').value);
  const area = Math.PI * Math.pow(radio, 2);
  document.getElementById('area-output').textContent = `Área: ${area.toFixed(2)}`;
}

// 6. Convertir Temperatura de Celsius a Fahrenheit
function convertirTemperatura() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('temperatura-output').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// 7. Imprimir Números del 1 al 10
function imprimirNumeros() {
  let output = '';
  for (let i = 1; i <= 10; i++) {
      output += i + ' ';
  }
  document.getElementById('numeros-output').textContent = output.trim();
}

// 8. Pedir Números hasta un Negativo
function pedirNumeros() {
  let numero;
  do {
      numero = parseInt(prompt('Ingrese un número (negativo para terminar):'));
  } while (numero >= 0);
}

// 9. Tabla de Multiplicar
function tablaMultiplicar() {
  const num = parseInt(document.getElementById('numero-tabla').value);
  let output = '';
  for (let i = 1; i <= 10; i++) {
      output += `${num} x ${i} = ${num * i}\n`;
  }
  document.getElementById('tabla-output').textContent = output;
}

// 10. Suma de Números Pares del 1 al 100
function sumarNumerosPares() {
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
          suma += i;
      }
  }
  document.getElementById('suma-output').textContent = `Suma de números pares del 1 al 100: ${suma}`;
}

// 11. Objeto Persona
function crearPersona() {
  const persona = {
      nombre: 'Juan',
      edad: 30,
      ciudad: 'Buenos aires',
      presentarse: function() {
          return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
      }
  };
  document.getElementById('persona-output').textContent = persona.presentarse();
}

// 12. Array de Objetos Persona
function mostrarPersonas() {
  const personas = [
      { nombre: 'Juan', edad: 30, ciudad: 'Buenos aires' },
      { nombre: 'Ana', edad: 25, ciudad: 'Mendoza' },
      { nombre: 'Luis', edad: 35, ciudad: 'Entre Rios' }
  ];
  let output = '';
  for (let persona of personas) {
      output += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}\n`;
  }
  document.getElementById('personas-output').textContent = output;
}

// 13. Calcular Promedio
function calcularPromedio() {
  const input = document.getElementById('numeros-array').value;
  const numeros = input.split(',').map(Number);
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = suma / numeros.length;
  document.getElementById('promedio-output').textContent = `Promedio: ${promedio}`;
}
