import { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';
import Search from '../components/search/Search';
import { BASE_URL } from '../data';
function Rent() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/hire`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navigation />
      <Search />
      <Footer />
    </>
  );
}

export default Rent;
