ejecutarOperacion=(fnOperacion)=>{
    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");
    let v1 = parseFloat(caja1.value);
    let v2 = parseFloat(caja2.value);
    let resultado =fnOperacion(v1, v2);
    alert(resultado);
}

sumar = (a, b) => {
    let resultado = a + b;
    return resultado;
}

restar = (a, b) => {
    let resultado = a - b;
    return resultado;
}

ejecutar=(fn)=>{
    console.log("Estoy ejecutando funciones");
    fn();
}

imprimir=()=>{
    console.log("Estoy imprimiendo");
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL");
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("SOY UNA FUNCION ANÓNIMA")
    });
}






