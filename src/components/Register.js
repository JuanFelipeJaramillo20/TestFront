import React, { useState } from "react";
import Axios from "axios"

export default function Register(){

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [lastname, setLastName] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("")
    const [email, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const register = async(e) =>{
        e.preventDefault();
        const usuario={name, lastname, phone, birthdate, gender,email, password}
        console.log(usuario)
        const respuesta =  await Axios.post("/auth/register", usuario)
        console.log(respuesta)
        const token = respuesta.data
        console.log(token)
        //sessionStorage.setItem("name", token.name)
        //sessionStorage.setItem("id", token.id)
        //sessionStorage.setItem("lastname", token.lastname)
        //sessionStorage.setItem("gender", token.gender)
        //sessionStorage.setItem("email", token.email)
        //sessionStorage.setItem("role", token.role)
        //sessionStorage.setItem("token", token.authToken)
        alert("Usuario creado satisfactoriamente")

        // Aqui va la ruta a la cual se va a redirigir al usuario después de iniciar sesión (inicio, servicios, etc)
        window.location.href="/"

    }

    return(
        <div class="container abs-center">
            <div class="row">
                <div class="col caja__trasera">
                    <form class="form-signin" onSubmit={register}>
                        <h2 class="h3 mb-3 fw-normal">Registrarse </h2>

                        <div class="form-floating">
                            <input type="text" class="form-control form-control-label" id="colFormLabel" placeholder="Juan" onChange={(e) => {setName(e.target.value)}}/>
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Hernandez" onChange={(e) => {setLastName(e.target.value)}}/>
                            <label for="floatingInput">Apellido</label>
                        </div>
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInput" placeholder="Hernandez" onChange={(e) => {setBirthdate(e.target.value)}}/>
                            <label for="floatingInput">Fecha de nacimiento</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control" id="floatingInput" placeholder="315...." onChange={(e) => {setPhone(parseInt(e.target.value))}}/>
                            <label for="floatingInput">Celular</label>
                        </div>
                        <div class="form-floating">
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setGender(e.target.value)}}>
                                <option selected>Selecciona uno</option>
                                <option value="female">Mujer</option>
                                <option value="male">Hombre</option>+
                            </select>
                            <label for="floatingInput">Genero</label>
                        </div>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setCorreo(e.target.value)}}/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value)}}/>
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
                            <label for="floatingPassword">Confirmar Contraseña</label>
                        </div>
                        <div class="checkbox mb-3">
                            <input type="checkbox" value="remember-me" />
                            <label for="floatingInput">Terminos y Condiciones</label>
                        </div>
                            <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                            <p class="mt-5 mb-3 text-muted">&copy; Burgundy 2021</p>
                    </form>
                </div>
            </div>
        </div>
    );
}