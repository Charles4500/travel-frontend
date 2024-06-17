import Booking from '../components/Tickets/Booking';
import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';
import Front from '../components/public/Front';
import Publict from '../components/public/Publict';
// import Search from '../components/public/Search';
import { BASE_URL } from '../data';
import { useEffect, useState } from 'react';
function Public() {
  const [buses, setBuses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    fetch(`${BASE_URL}/bus`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setBuses(data))
      .catch((error) => console.log(error));
  }, []);
  const filteredBuses = buses.filter((bus) =>
    bus.location_to.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div>
      <Navigation />
      <Front />
      <Booking />
      <Publict buses={filteredBuses} />
      <Footer />
    </div>
  );
}

export default Public;
