const gafas = []
const carrito = []
const IVA = 1.19
const stockgafas = []

class gafa {
    constructor(id, tipo, stock, preciog) {
        this.id = id
        this.tipo = tipo
        this.stock = stock
        this.preciog = preciog
        this.iva = 1.19
    }
    
    precioconIVAgafa() {
        let pfg = this.preciog * this.iva
        return pfg.toFixed(1)
    }
}

class carro {
    constructor(id, tipo, stock, preciog) {
        this.id = id
        this.tipo = tipo
        this.stock = stock
        this.preciog = preciog
        this.iva = 1.19
    }
    
    precioconIVAcarro() {
        let pfc = this.preciog * this.iva
        return pfc.toFixed(1)
    } 
}


cargagafas = () => {
    gafas.push(new gafa(1,"Tipo Rojo Estelar", 20, 198000))
    gafas.push(new gafa(2,"Tipo Azul Radiante", 10, 224000))
    gafas.push(new gafa(3,"Tipo Negro Playa", 5, 298500))
}

cargacarrito = () => {
    carrito.push(new carro(1,"Tipo Rojo Estelar", 0, 0))
    carrito.push(new carro(2,"Tipo Azul Radiante", 0, 0))
    carrito.push(new carro(3,"Tipo Negro Playa", 0, 0))
}

iterargafas = () => {
    for(let gafa of gafas){
        console.table(gafa)

    }
}

iterarcarrito = () => {
    for(let carro of carrito){
        console.table(carro)

    }
}

vendegafas1 = () => {
    let stockg = gafas[0].stock
    let stockc = carrito[0].stock
    let precioc = gafas[0].preciog

    stockg > 0 ? 
    (stockg = stockg - 1,
    gafas[0].stock = stockg,
    
    stockc = stockc + 1,
    carrito[0].stock = stockc,

    precioc = stockc * precioc,
    carrito[0].preciog = precioc)

    : swa1()
    }



vendegafas2 = () => {
    let stockg = gafas[1].stock
    let stockc = carrito[1].stock
    let precioc = gafas[1].preciog

    stockg>0 ?
    (stockg = stockg - 1,
    gafas[1].stock = stockg,

    
    stockc = stockc + 1,
    carrito[1].stock = stockc,

    
    precioc = stockc * precioc,
    carrito[1].preciog = precioc)

    : swa1()
    }


vendegafas3 = () => {
    let stockg = gafas[2].stock
    let stockc = carrito[2].stock
    let precioc = gafas[2].preciog

    stockg>0 ?
    (stockg = stockg - 1,
    gafas[2].stock = stockg,

    stockc = stockc + 1,
    carrito[2].stock = stockc,

    
    precioc = stockc * precioc,
    carrito[2].preciog = precioc
    ) : swa1()
    }


function quitarDelcarrito1 (){
    let stockg = gafas[0].stock
    let stockc = carrito[0].stock
    let precioc = gafas[0].preciog

    stockc>0 ?
    (stockg = stockg + 1,
    gafas[0].stock = stockg,
    
    stockc = stockc - 1,
    carrito[0].stock = stockc,

    precioc = stockc * precioc,
    carrito[0].preciog = precioc)
    :

    swa2()

    }


function quitarDelcarrito2 (){
    let stockg = gafas[1].stock
    let stockc = carrito[1].stock
    let precioc = gafas[1].preciog

    stockc>0 ?
    (stockg = stockg + 1,
    gafas[1].stock = stockg,

    stockc = stockc - 1,
    carrito[1].stock = stockc,

    precioc = stockc * precioc,
    carrito[1].preciog = precioc)
    :

    swa2()

    }


function quitarDelcarrito3 (){
    let stockg = gafas[2].stock
    let stockc = carrito[2].stock
    stockc3 = carrito[2].stock
    let precioc = gafas[2].preciog
    stockc>0 ?
    (stockg = stockg + 1,
    gafas[2].stock = stockg,

    stockc = stockc - 1,
    carrito[2].stock = stockc,

    
    precioc = stockc * precioc,
    carrito[2].preciog = precioc)
    :

    swa2()

    }


function actualizazavalor () {
    
    let precioc1 = carrito[0].preciog
    let precioc2 = carrito[1].preciog
    let precioc3 = carrito[2].preciog

    valor = precioc1 + precioc2 + precioc3

    value.innerHTML=""
    const pv = document.createElement("h2")
    pv.innerText = "$ " + (valor) + " COP"
    value.append(pv)
}

iterargafas()
iterarcarrito()


const swa1 = () => {
    Swal.fire({
    title: 'Stock Agotado',
    text: 'Agotaste el Inventario. No puedes seguir comprando esta categoria',
    icon: 'error',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: 'rgb(21, 201, 21)'
    })
}

const swa2 = () => {
    Swal.fire({
        title: 'Eliminaste Producto del Carrito',
        text: 'Eliminaste la categoria del carrito. Agrega mas para comprar esta categoria de gafas',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'rgb(21, 201, 21)'
    })

}  

const toastSA = (mensaje) =>{
    Swal.fire({
        icon: 'success',
        title: mensaje,
        position: 'bottom',
        showConfirmButton: false,
        toast: true,
        timer: 5000,
        timerProgressBar: true,
        background: 'rgb(21, 201, 21)',
        color: 'white'
    })
}

const toastCA = (mensaje) =>{
    Swal.fire({
        icon: 'error',
        title: mensaje,
        position: 'bottom',
        showConfirmButton: false,
        toast: true,
        timer: 5000,
        timerProgressBar: true,
        background: 'rgb(205, 92, 92)',
        color: 'white'
    })
}


