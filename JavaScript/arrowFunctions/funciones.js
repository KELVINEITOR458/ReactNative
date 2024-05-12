ejecutar=(fnOperacion)=>{
    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");
    let v1 = parseFloat(caja1.value);
    let v2 = parseFloat(caja2.value);
    fnOperacion(v1, v2);
}

sumar = (a, b) => {
    let resultado = a + b;
    alert("El resultado es: " + resultado);
}

restar = (a, b) => {
    let resultado = a - b;
    alert("El resultado es: " + resultado);
}






