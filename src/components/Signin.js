import React, { useState } from "react";
import Axios from "axios"

export default function Signin(){
    const [email, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const login = async(e) =>{
        e.preventDefault();
        const usuario={email, password}
        console.log(usuario)
        const respuesta =  await Axios.post("/auth/login", usuario)
        console.log(respuesta)
        const token = respuesta.data
        sessionStorage.setItem("name", token.name)
        sessionStorage.setItem("id", token.id)
        sessionStorage.setItem("lastname", token.lastname)
        sessionStorage.setItem("gender", token.gender)
        sessionStorage.setItem("email", token.email)
        sessionStorage.setItem("role", token.role)
        sessionStorage.setItem("token", token.authToken)
        alert("Ingreso satisfactoriamente")

        // Aqui va la ruta a la cual se va a redirigir al usuario después de iniciar sesión (inicio, servicios, etc)
        //window.location.href="./index"

    }

    return(
        <div class="container abs-center">
            <div class="row">
                <div class="col caja__trasera">
                    <form class="form-signin" onSubmit={login}>
                        <h1 class="h3 mb-3 fw-normal">Iniciar Sesión para entrar</h1>
                    
                        <div class="form-floating">
                            <label for="floatingInput">Email</label>
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setCorreo(e.target.value)}}/>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                    
                        <div class="checkbox mb-3">
                            <label>
                            <input type="checkbox" value="remember-me" /> Recordar
                            </label>
                        </div>
                        <div>
                            <a href="/register">Registrarse</a>
                        </div>
                            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p class="mt-5 mb-3 text-muted">&copy; Burgundy 2021</p>
                    </form>
                </div>
            </div>
        </div>
    )
}