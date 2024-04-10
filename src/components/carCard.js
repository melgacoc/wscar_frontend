import React from 'react';
import './carCard.css'

function CarCards({ cars, tab }) {
    return (
      <div className="card">
        <div className="car-table">
          <div className="car-row header">
            <div>ID</div>
            <div>Ano</div>
            <div>Modelo</div>
            <div>Modelo ID</div>
            <div>Valor</div>
            <div>Portas</div>
            <div>Combustível</div>
            <div>Cor</div>
            {
              tab === 'brand' && <div>Marca</div>
            }
          </div>
          {cars.map((car, index) => (
            <div key={index} className={`car-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div>{car.car_number}</div>
              <div>{car.ano}</div>
              <div>{car.nome_modelo}</div>
              <div>{car.modelo_id}</div>
              <div>{car.valor}</div>
              <div>{car.num_portas}</div>
              <div>{car.combustivel}</div>
              <div>{car.cor}</div>
              {
                tab === 'brand' && <div>{car.brand}</div>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CarCards;