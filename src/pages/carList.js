import CarCards from '../components/carCard.js';
import Header from '../components/header.js';
import NewCarForm from '../components/newCar.js';
import React from 'react';
import { useState, useEffect } from 'react';
import './carList.css';
import { getCars, getCarsByBrand } from '../utils/apis.js';

function CarList() {

  const [activeTab, setActiveTab] = useState('all');
  const [cars, setCars] = useState([]);
  const [carsByBrand, setCarsByBrand] = useState([]);

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {

    document.title = 'WS Cars - Lista de Carros';

    getCars().then((response) => {
      setCars(response);
    });
    getCarsByBrand().then((response) => {
      setCarsByBrand(response);
    });
  }, []);

  return (
    <div>
        <Header page={'cars'}/>
        <div className="tabs">
            <button
              className={activeTab === 'all' ? 'active' : ''}
              onClick={() => switchTab('all')}
            >
              Todos
            </button>
            <button
              className={activeTab === 'brand' ? 'active' : ''}
              onClick={() => switchTab('brand')}
            >
              Por Marca
            </button>
            <button
              className={activeTab === 'newCar' ? 'active' : ''}
              onClick={() => switchTab('newCar')}
            >
              Novo carro
            </button>
        </div>
        {
            activeTab === 'brand' && <CarCards cars={carsByBrand} tab={activeTab} />
        }
        {
            activeTab === 'all' && < CarCards cars={cars} tab={activeTab}/>
        }
        {
            activeTab === 'newCar' && <NewCarForm />
        }
    </div>
  );
}

export default CarList;
