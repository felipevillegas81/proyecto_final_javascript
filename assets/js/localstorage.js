document.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (document.getElementById('exampleCheck1').checked){
    guardardatosinicio()
    }
}
)

function guardardatosinicio(){
    const userdata = {
        correo1 : correo1.value,
        contrasena1 : contrasena1.value
    }
    let str = JSON.stringify(userdata)
    localStorage.setItem("userdata", str)
}


function recuperauserdata () {
    if(localStorage.getItem("userdata")){

        const userdata = JSON.parse(localStorage.getItem("userdata"))

        correo1.value = userdata.correo1
        contrasena1.value = userdata.contrasena1

        correo2.value = userdata.correo1
        contrasena2.value = userdata.contrasena1
    }
}

recuperauserdata ()

