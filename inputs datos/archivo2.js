let nombre, edad, a, b, sum, res, mult, div, pot, resid; //variables declaradas
nombre = prompt('Ingrese su nombre');
edad = prompt('Ingrese su edad');
a = parseInt(prompt('primer numero'));
b = parseInt(prompt('segundo numero'));

sum = a + b;
res = a - b;
mult = a * b;
div = parseFloat(a/b);
pot = a ** b;
resid = a % b;

const numerofavorito = 8;

document.write("nombre ", nombre);
document.write("<br>");
document.write("edad ", edad);
document.write("<br>");

document.write("el numero favorito es: ", numerofavorito , " de pool");
document.write("<br>");
document.write("resultado suma: ", sum);
document.write("<br>");
document.write("resultado resta: ", res);
document.write("<br>");
document.write("resultado multiplicacion: ", mult);
document.write("<br>");
document.write("resultado division: ", div);
document.write("<br>");
document.write("resultado potencia: ", pot);
document.write("<br>");
document.write("resultado raiz: ", resid);


//con // se comenta para entender mejor el codigo


