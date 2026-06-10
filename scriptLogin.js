// funciones onclick
//function irPagina (){
//    windows.location.href = "index.html" 
//}

let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//      console.log("Hiciste click en el boton");
// } );

//Validacion de los input
// boton.addEventListener("click", function(){
//      let usuario = document.getElementById ("usuario").value;
//      let clave = document.getElementById ("clave").value;

//      console.log("Usuario ingresado: " + usuario);
//      console.log("Password ingresado: " + clave); 
// } );


boton.addEventListener("click", function() {
    
    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";

    let usuario = document.getElementById ("usuario").value;
    let clave = document.getElementById ("clave").value;
    let mensaje = document.getElementById ("mensaje");
    
    if (usuario === "" || clave === ""){
        mensaje.textContent = "Debes completar todos los campos";
        mensaje.style.color = "orange";
    }else if ( usuario === usuarioCorrecto && clave === claveCorrecta){
        mensaje.textContent = "Acceso Permitido. Redirigiendo en 3 segundos";
        mensaje.style.color = "green";

        setTimeout (function (){
            window.location.href = "index.html"
        }, 3000);

    }else {
        mensaje.textContent = "Usuarion o contraseña incorrectos";
        mensaje.style.color = "red";

    }

});