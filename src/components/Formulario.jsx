import React from "react";
import { useState } from "react";


const Formulario = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRetryPassword, setUserRetryPassword] = useState("");
    
    const validateForm = (e) => {
        e.preventDefault();
        alert('validar el formulario')
    }
    return (
        <>
          <h5>O usa tu email para registrarte</h5>
          <form onSubmit={validateForm}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Nombre"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="tuemail@ejemplo.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="userPassword"
                placeholder="Contraseña"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="userRetryPassword"
                placeholder="Confirma tu contraseña"
                value={userRetryPassword}
                onChange={(e) => setUserRetryPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success form-control">
              Registrarse
            </button>
          </form>
        </>
    )
}

export default Formulario