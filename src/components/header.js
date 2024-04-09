import React from "react";

const url = "https://main--wscar-melgaco.netlify.app/";

function Header({ page }) {
  return (
    <div className="header">
      <h1>
        WS Cars
      </h1>
      <div>
        {page === "newCar" ? (
          <button className="btn btn-primary" onClick={() => window.location.href = url}>
            Voltar
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => window.location.href = `${url}newCar`}>
            Cadastrar novo carro
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
