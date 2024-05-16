recuperar=()=>{
    let frutas=["pera", "manzana", "sandia"];
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas = recuperar();
    let frutaPrimera = misFrutas[0];
    let otraFruta = misFrutas[1];

    console.log("1="+frutaPrimera+ " 2=" + otraFruta)
}

testRecuperarDes=()=>{
    let [frutaPrimera, furtaSegunda, frutaTercera] = recuperar();
    console.log(frutaPrimera + " " + furtaSegunda + " " + frutaTercera);

}