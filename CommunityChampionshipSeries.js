function saludar(){
    var name = prompt("Dime tu nombre, numero de la cuenta bancaria, tarjeta de crédito, donde vives, horarios que no estás en casa, número de la seguridad social y tu alma ya de paso", "No es broma");
    document.getElementById("demo").innerHTML = "Hola " + name;
}