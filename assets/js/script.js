cargagafas()
cargacarrito()

Cargartipo1 = () => {

    description1.innerHTML = ""

    const h2 = document.createElement("h2")
    h2.innerText = gafas[0].tipo
    description1.append(h2)

    const p = document.createElement("p")
    p.innerText = "Precio: " + gafas[0].preciog
    description1.append(p)
    
    const p2 = document.createElement("p")
    p2.innerText = "Stock: " + gafas[0].stock
    description1.append(p2)

}

Eliminartipo1 = () => {
    shoop1.innerHTML= ""    
}

Cargartipo2 = () => {

    description2.innerHTML = ""

    const h2 = document.createElement("h2")
    h2.innerText = gafas[1].tipo
    description2.append(h2)

    const p = document.createElement("p")
    p.innerText = "Precio: " + gafas[1].preciog
    description2.append(p)
    
    const p2 = document.createElement("p")
    p2.innerText = "Stock: " + gafas[1].stock
    description2.append(p2)

}

Eliminartipo2 = () => {
    shoop2.innerHTML= ""    
}

Cargartipo3 = () => {

    description3.innerHTML = ""

    const h2 = document.createElement("h2")
    h2.innerText = gafas[2].tipo
    description3.append(h2)

    const p = document.createElement("p")
    p.innerText = "PRECIO: " + gafas[2].preciog
    description3.append(p)
    
    const p2 = document.createElement("p")
    p2.innerText = "STOCK: " + gafas[2].stock
    description3.append(p2)

}

Eliminartipo3 = () => {
    shoop3.innerHTML= ""    
}


function agregarAlcarrito1 (){

    Cargartipo1()

    shoop1.innerHTML= ""

    const div = document.createElement("div")
    div.className = "card"
    div.id = "card1"
    shoop1.append(div)

    const div2 = document.createElement("div")
    div2.className = "cover"
    div2.id = "cover1"
    card1.append(div2)

    const img1 = document.createElement("img")
    img1.src = "../assets/img/shop1.jpg"
    img1.alt = "Tipo Rojo Estelar"
    cover1.append(img1)

    const div3 = document.createElement("div")
    div3.className = "img__back"
    cover1.append(div3)    

    const div4 = document.createElement("div")
    div4.className = "description"
    div4.id = "description4"
    card1.append(div4)

    const h2_1 = document.createElement("h2")
    h2_1.innerText = carrito[0].tipo
    description4.append(h2_1)
    
    const p2 = document.createElement("p")
    p2.innerText = "UNIDADES COMPRADAS: " + carrito[0].stock
    description4.append(p2)

    const p1 = document.createElement("p")
    p1.innerText = "PRECIO: " + carrito[0].preciog
    description4.append(p1)

    const button1 = document.createElement('input');
    button1.className = 'boton';
    button1.type = 'button';
    button1.value = 'Eliminar del Carrito';
    button1.addEventListener("click", ()=>{
        quitarDelcarrito1()
        agregarAlcarrito1 ()

        let stockc = carrito[0].stock
        
        if(stockc===0){
        shoop1.innerHTML= "" 
        swa2()
        }

        actualizazavalor ()
    })
    description4.append(button1)

}

function agregarAlcarrito2 (){

    Cargartipo2()

    shoop2.innerHTML= ""

    const div5 = document.createElement("div")
    div5.className = "card"
    div5.id = "card2"
    shoop2.append(div5)

    const div6 = document.createElement("div")
    div6.className = "cover"
    div6.id = "cover2"
    card2.append(div6)

    const img2 = document.createElement("img")
    img2.src = "../assets/img/shop2.jpg"
    img2.alt = "Prueba"
    cover2.append(img2)

    const div7 = document.createElement("div")
    div7.className = "img__back"
    cover2.append(div7)    

    const div8 = document.createElement("div")
    div8.className = "description"
    div8.id = "description5"
    card2.append(div8)

    const h2_2 = document.createElement("h2")
    h2_2.innerText = carrito[1].tipo
    description5.append(h2_2)
    
    const p4 = document.createElement("p")
    p4.innerText = "UNIDADES COMPRADAS: " + carrito[1].stock
    description5.append(p4)

    const p3 = document.createElement("p")
    p3.innerText = "PRECIO: " + carrito[1].preciog
    description5.append(p3)

    const button2 = document.createElement('input');
    button2.className = 'boton';
    button2. type = 'button';
    button2.value = 'Eliminar del Carrito';
    button2.addEventListener("click", ()=>{
        quitarDelcarrito2()
        agregarAlcarrito2 ()

        let stockc = carrito[1].stock
        
        if(stockc===0){
        shoop2.innerHTML= "" 
        swa2()
        }

        actualizazavalor ()
    })
    description5.append(button2)
    
}

function agregarAlcarrito3 (){
    
    Cargartipo3()

    shoop3.innerHTML= ""

    const div9 = document.createElement("div")
    div9.className = "card"
    div9.id = "card3"
    shoop3.append(div9)

    const div10 = document.createElement("div")
    div10.className = "cover"
    div10.id = "cover3"
    card3.append(div10)

    const img3 = document.createElement("img")
    img3.src = "../assets/img/shop3.png"
    img3.alt = "Prueba"
    cover3.append(img3)

    const div11 = document.createElement("div")
    div11.className = "img__back"
    cover3.append(div11)    

    const div12 = document.createElement("div")
    div12.className = "description"
    div12.id = "description6"
    card3.append(div12)

    const h2_3 = document.createElement("h2")
    h2_3.innerText = carrito[2].tipo
    description6.append(h2_3)
    
    const p6 = document.createElement("p")
    p6.innerText = "UNIDADES COMPRADAS: " + carrito[2].stock
    description6.append(p6)

    const p5 = document.createElement("p")
    p5.innerText = "PRECIO: " + carrito[2].preciog
    description6.append(p5)

    const button3 = document.createElement('input');
    button3.className = 'boton';
    button3. type = 'button';
    button3.value = 'Eliminar del Carrito';
    button3.addEventListener("click", ()=>{
        quitarDelcarrito3()
        agregarAlcarrito3 ()

        let stockc = carrito[2].stock
        
        if(stockc===0){
        shoop3.innerHTML= "" 
        swa2()
        }

        actualizazavalor ()
    })
    description6.append(button3)
}

    comprar.addEventListener("click", (e) => {
    e.preventDefault()
    if(valor>0){
        toastSA("Compraste exitosamente tus gafas")
    } else{
        toastCA("No Agregaste Productos. Agrega para comprar")
    }
})


