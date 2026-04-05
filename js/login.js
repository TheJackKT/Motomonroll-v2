const usuarios = 
{admin : "1234",
 juan : "abcd",
 maria : "12345"
}

const formLogin = document.getElementById("formLogin")

if(formLogin){

formLogin.addEventListener("submit", function(e){

    e.preventDefault();

const usuario = document.getElementById("usuario").value;
const password = document.getElementById("password").value;

if (usuarios[usuario]===password){
        sessionStorage.setItem("usuario", usuario);
        window.location.href="index.html"
} else {
    const mensaje = document.getElementById("mensaje")
    mensaje.textContent = "usuario o contraseña incorrectos" 

}


});

}


const usuarioActivo = sessionStorage.getItem("usuario");
const textoUsuario = document.getElementById("usuarioActivo");

if(usuarioActivo && textoUsuario){

    textoUsuario.textContent = "Hola, " + usuarioActivo;

}