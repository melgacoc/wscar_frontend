import React, { useState } from "react";
import { createCar, createCarByBrand } from "../utils/apis";
import "./newCar.css";

function NewCarForm() {
  const [carData, setCarData] = useState({
    modelo_id: "",
    ano: "",
    combustivel: "",
    num_portas: "",
    cor: "",
    nome_modelo: "",
    valor: "",
    brand: ""
  });

  const verifyData = () => {
    if (carData.modelo_id === "" || carData.ano === "" || carData.combustivel === "" || carData.num_portas === "" || carData.cor === "" || carData.nome_modelo === "" || carData.valor === "") {
      return false;
    }
    return true;
  }

  const createCarHandler = async () => {
    if (!verifyData()) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
    if (carData.brand === "") {
      await createCar(carData);
      window.location.redirect("/");
    } else {  
      await createCarByBrand(carData);
      window.location.redirect("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
  
    if (name === 'modelo_id' || name === 'ano' || name === 'num_portas' || name === 'brand') {
      parsedValue = value === '' ? null : parseInt(value);
    } else if (name === 'valor') {
      parsedValue = value === '' ? null : parseFloat(value);
    }
  
    setCarData({ ...carData, [name]: parsedValue });
  };
  
  return (
    <div className="new-car-form">
      <h1>New Car</h1>
      <form>
        <br />
        <label>
          Modelo ID:
          <input
            type="text"
            name="modelo_id"
            value={carData.modelo_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ano:
          <input
            type="text"
            name="ano"
            value={carData.ano}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Combustível:
          <input
            type="text"
            name="combustivel"
            value={carData.combustivel}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Número de Portas:
          <input
            type="text"
            name="num_portas"
            value={carData.num_portas}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cor:
          <input
            type="text"
            name="cor"
            value={carData.cor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nome do Modelo:
          <input
            type="text"
            name="nome_modelo"
            value={carData.nome_modelo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Valor:
          <input
            type="text"
            name="valor"
            value={carData.valor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={carData.brand}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit"
        onClick={createCarHandler}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default NewCarForm;
