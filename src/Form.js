import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { isRegister: false };
  }
  toggleRegister = (state) => () => this.setState({ isRegister: state });
  render() {
    return (
      <div className="contenedor__todo">
        <div className="caja__trasera">
          {" "}
          {this.state.isRegister && (
            <div className="caja__trasera-login">
              <h3> ¿Ya tienes una cuenta ? </h3>{" "}
              <p> Iniciar Sesión para entrar en la página </p>{" "}
              <button
                id="btn__Iniciar-Sesión"
                onClick={this.toggleRegister(false)}
              >
                {" "}
                Iniciar Sesión{" "}
              </button>{" "}
            </div>
          )}{" "}
          <div className="caja__trasera-login">
            <h3> ¿Ya tienes una cuenta ? </h3>{" "}
            <p> Iniciar Sesión para entrar en la página </p>{" "}
            <button
              id="btn__Iniciar-Sesión"
              onClick={this.toggleRegister(false)}
            >
              {" "}
              Iniciar Sesión{" "}
            </button>{" "}
          </div>{" "}
          {!this.state.isRegister && (
            <div className="caja__trasera-register">
              <h3> ¿Aún no tienes una cuenta ? </h3>{" "}
              <p> Registrarse para Iniciar Sesión </p>{" "}
              <button id="btn__Registrarse" onClick={this.toggleRegister(true)}>
                {" "}
                Registrarse{" "}
              </button>{" "}
            </div>
          )}{" "}
        </div>{" "}
        <div
          className="contenedor__login-register"
          style={{
            left: this.state.isRegister ? "420px" : "10px",
          }}
        >
          <form action="" class="formulario__login">
            <h2> Iniciar sesión </h2>{" "}
            <input type="text" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button> Entrar </button>{" "}
          </form>{" "}
          {this.state.isRegister && (
            <form action="" className="formulario__register">
              <h2> Registrarse </h2>{" "}
              <input type="text" placeholder="Nombre Completo" />
              <input type="text" placeholder="Correo electrónico" />
              <input type="text" placeholder="Tipo de usuario" />
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="contraseña" />
              <input type="password" placeholder="confirmar contraseña" />{" "}
              <br /> <br />
              <div className="center">
                <input className="checkbox" type="checkbox" />
                <label> Aceptar terminos y condiciones </label>{" "}
              </div>{" "}
              <br /> <br />
              <button> Registrarse </button>{" "}
            </form>
          )}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Form;
