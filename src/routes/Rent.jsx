import { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';

import { BASE_URL } from '../data';
import Cars from '../components/private/Cars';
import SearchCars from '../components/search/SearchCars';
function Rent() {
  const [cars, setCars] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    fetch(`${BASE_URL}/hire`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);
  const filteredCars = cars.filter((car) =>
    car.car_brand.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      <Navigation />
      <SearchCars setSearchInput={setSearchInput} searchInput={searchInput} />
      <Cars cars={filteredCars} />
      <Footer />
    </>
  );
}

export default Rent;
