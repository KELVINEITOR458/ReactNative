import { StatusBar } from 'expo-status-bar';
import { ScrollView, Alert, Button, TextInput, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

let esNuevo = true;
let idSeleccionado = -1;
let productos = [
  { nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: 'Manicho', categoria: 'Golosinas', precioCompra: 0.50, precioVenta: 0.60, id: 101 },
  { nombre: 'Pilsener', categoria: 'Alcohol', precioCompra: 1.40, precioVenta: 2.00, id: 102 },
  { nombre: 'Pepsi', categoria: 'Bebidas', precioCompra: 0.80, precioVenta: 0.95, id: 103 },
  { nombre: 'Deja', categoria: 'Limpieza', precioCompra: 1.00, precioVenta: 1.15, id: 104 }
]

export default function App() {
  const [txtCodigo, setCodigo] = useState();
  const [txtNombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [txtPrecioCompra, setPrecioCompra] = useState();
  const [precioVenta, setPrecioVenta] = useState();
  const [numElementos, setNumElementos] = useState(productos.length);

  useEffect(() => {
    if (txtPrecioCompra) {
      const precioCompraFloat = parseFloat(txtPrecioCompra);
      if (!isNaN(precioCompraFloat)) {
        const masPorciento = precioCompraFloat * 0.20;
        setPrecioVenta((precioCompraFloat + masPorciento).toFixed(2).toString());
      }
    }
  }, [txtPrecioCompra]);
  let ItemProducto = (props) => {
    return <View style={styles.listaProductos}>
      <View style={styles.itemIndice}>
        <Text>
          {props.producto.id}
        </Text>
      </View>
      <View style={styles.itemContenido}>
        <Text style={styles.nombreProductos}>
          {props.producto.nombre}
        </Text>
        <Text style={styles.categoriaProductos}>
          ({props.producto.categoria})
        </Text>
      </View>
      <View style={styles.precioProductos}>
        <Text>
          {props.producto.precioVenta}
        </Text>
      </View>
      <View style={styles.botonesProductos}>
        <Button
          title=' E '
          color='green'
          onPress={()=>{
            setNombre(props.producto.nombre);
            setCategoria(props.producto.categoria);
            setCodigo(props.producto.id.toString());
            setPrecioCompra(props.producto.precioCompra.toString());
            setPrecioVenta(props.producto.precioVenta.toString());
            esNuevo = false;
            idSeleccionado = props.producto.id
          }}
        />
        <Button
          title=' X '
          color='red'
          onPress={() => {
            idSeleccionado=props.indice
            productos.splice(idSeleccionado, 1);
            setNumElementos(productos.length)
          }}
        />
      </View>
    </View>
  }
  let existeProducto = () => {
    for (i = 0; i < productos.length; i++) {
      if (productos[i].id == txtCodigo) {
        return true;
      }
    }
    return false;
  }
  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setPrecioCompra(null);
    setPrecioVenta(null);
    esNuevo = true;
  }
  let guardarProducto = () => {
    if(txtCodigo, txtNombre, categoria, txtPrecioCompra, precioVenta ==null){
      Alert.alert("ALERTA", "Debe llenar todos los campos")
    }else{
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("ALERTA", "Ya existe un producto con el codigo: " + txtCodigo)
        } else {
          let producto = {
            id: parseInt(txtCodigo),
            nombre: txtNombre,
            categoria: categoria,
            precioCompra: parseFloat(txtPrecioCompra),
            precioVenta: parseFloat(precioVenta)
          };
          productos.push(producto);
        }
      }else{
        let index = productos.findIndex(producto => producto.id === idSeleccionado);
        if (index !== -1) {
          productos[index].nombre = txtNombre;
          productos[index].categoria = categoria;
          productos[index].precioCompra = parseFloat(txtPrecioCompra);
          productos[index].precioVenta = parseFloat(precioVenta);
        }
      }
      limpiar()
      setNumElementos(productos.length);
    }
    
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.areaCabecera}>
        <ScrollView>
          <Text style={styles.titulo}>Productos</Text>
          <TextInput style={styles.txt}
            value={txtCodigo}
            placeholder='CODIGO'
            onChangeText={setCodigo}
            editable={esNuevo}
            keyboardType='numeric'
          />
          <TextInput style={styles.txt}
            value={txtNombre}
            placeholder='NOMBRE'
            onChangeText={setNombre}
          />
          <TextInput style={styles.txt}
            value={categoria}
            placeholder='CATEGORIA'
            onChangeText={setCategoria}
          />
          <TextInput style={styles.txt}
            value={txtPrecioCompra}
            placeholder='PRECIO DE COMPRA'
            onChangeText={setPrecioCompra}
            keyboardType='numeric'
          />
          <TextInput style={styles.txt}
            value={precioVenta}
            placeholder={'PRECIO DE VENTA'}
            editable={false}
          />
          <View style={styles.areaBotones}>
            <Button
              title='NUEVO'
              onPress={limpiar}
            />
            <Button
              title='GUARDAR'
              onPress={guardarProducto}
            />
            <Text>Productos: {numElementos}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.areaContenido}>
        <FlatList style={styles.lista}
          data={productos}
          renderItem={(elemento) => {
            return <ItemProducto
              producto={elemento.item}
              indice = {elemento.index}
            />
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>AUTOR: Kelvin Bermeo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'strech',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listaProductos: {
    backgroundColor: '#B9FFB6',
    borderWidth: 1.5,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: 'black'
  },
  nombreProductos: {
    fontSize: 18
  },
  categoriaProductos: {
    fontWeight: 'bold',
  },
  precioProductos: {
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 2
  },
  itemIndice: {
    //backgroundColor: 'aqua',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    paddingLeft: 7,
    //backgroundColor: 'aquamarine',
    flex: 6
  },
  botonesProductos: {
    padding: 4,
    //backgroundColor: 'aqua',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lista: {
    //backgroundColor: 'blue'
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: '#2F933B',
    padding: 5,
    justifyContent: 'center'
  },
  areaContenido: {
    flex: 6,
  },
  areaPie: {
    flex: 0.5,
    //backgroundColor: '#4DFF00',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    padding: 4,
    borderRadius: 6
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 5
  },
});
