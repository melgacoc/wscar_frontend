import React from "react";

function Header({ page }) {
  return (
    <div className="header">
      <h1>
        WS Cars
      </h1>
      <div>
        {page === "newCar" ? (
          <button className="btn btn-primary" onClick={() => window.location.href="/"}>
            Voltar
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => window.location.href="/newCar"}>
            Cadastrar novo carro
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
