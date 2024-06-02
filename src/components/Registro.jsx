import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

const Registro = () => {
  return (
    <div className="container">
      <div className="card mx-auto my-5">
        <div className="card-body">
          <h1 className="card-title text-center">Crea una cuenta</h1>
          <div className="d-flex justify-content-center my-3">
            <SocialButton icon="facebook" />
            <SocialButton icon="twitter" />
            <SocialButton icon="google" />
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default Registro;
