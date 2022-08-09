
const retornoCardContenido = (contenido) => {
    const { idboton, poster, description, descripcion_gafas, stock, precio } = contenido

    return `<div class="card">
                    <div class="cover">
                        <img src="${poster}" alt="">
                    <div class="img__back"></div>
                </div>
                <div class="description" id="${description}">
                <h2>${descripcion_gafas}</h2>
                <p>PRECIO: ${precio}</p>
                <p>STOCK: ${stock}</p>
                </div>
                <button type"submit" class="boton" id="${idboton}">Agregar al Carrito</button>
            </div>`
}

const retornoCardError = () => {
    return `<div class=""> 
                <br><br><br><br> 
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                <br><br> 
                <i class=""></i> 
                <br><br> 
            </div>`
}

const obtenerContenido = (URL) => {
    let cardsAmostrar = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (contenido of data)
                cardsAmostrar += retornoCardContenido(contenido)
            contenidoDOM.innerHTML = cardsAmostrar
        }
        )
        .catch((error) => contenidoDOM.innerHTML = retornoCardError())
        .finally(() =>{ 
        cargandoDOM.innerHTML = ""

        cargavariables()

        boton1.addEventListener("click", (e) => {
        e.preventDefault()
        vendegafas1()
        agregarAlcarrito1()
        actualizazavalor()
        })

        boton2.addEventListener("click", (e) => {
        e.preventDefault()
        vendegafas2()
        agregarAlcarrito2()
        actualizazavalor()
        })

        boton3.addEventListener("click", (e) => {
        e.preventDefault()
        vendegafas3()
        agregarAlcarrito3()
        actualizazavalor()
        })
        })
}