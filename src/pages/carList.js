import CarCards from '../components/carCard.js';
import Header from '../components/header.js';
import NewCarForm from '../components/newCar.js';
import Loading from '../components/loading.js';
import { useState, useEffect } from 'react';
import './carList.css';
import { getCars, getCarsByBrand } from '../utils/apis.js';

function CarList() {

  const [activeTab, setActiveTab] = useState('all');
  const [cars, setCars] = useState([]);
  const [carsByBrand, setCarsByBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const carsData = await getCars();
      const carsByBrandData = await getCarsByBrand();
      setCars(carsData);
      setCarsByBrand(carsByBrandData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    loading ? <Loading /> :
    <div>
        <Header/>
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
