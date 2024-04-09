const url = 'https://wscar-api.onrender.com';

const getCars = async () => {
  const response = await fetch(`${url}/getCars`);
  return response.json();
}

const getCarsByBrand = async () => {
  console.log('url:', url);
    const response = await fetch(`${url}/getCarsByBrand`);
    return response.json();
}

const createCar = async (car) => {
  const response = await fetch(`${url}/newCar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  });
  return response.json();
};

const createCarByBrand = async (car) => {
  const response = await fetch(`${url}/newCarByBrand`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  });
  return response.json();
}

export { getCars, getCarsByBrand, createCar, createCarByBrand};