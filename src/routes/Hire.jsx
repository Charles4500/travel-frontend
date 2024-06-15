import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';
import { useState } from 'react';
import { BASE_URL } from '../data';

function Hire() {
  const [formData, setFormData] = useState({
    name: '',
    car_brand: '',
    image: '',
    hire_fee: '',
    date_hire: '',
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${BASE_URL}/hire`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => console.log('Success:', data));
  }

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center h-screen dark bg-[#292929]">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Product Feedback Form
          </h2>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              required
              placeholder="Full Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInput}
            />
            <input
              required
              placeholder="Car brand"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="car_brand"
              type="text"
              value={formData.car_brand}
              onChange={handleInput}
            />

            <input
              required
              placeholder="Image"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="image"
              type="text"
              value={formData.image}
              onChange={handleInput}
            />
            <input
              required
              placeholder=" Charges"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="hire_fee"
              type="number"
              value={formData.hire_fee}
              onChange={handleInput}
            />
            <input
              required
              placeholder="Date of hire"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="date_hire"
              type="date"
              value={formData.date_hire}
              onChange={handleInput}
            />
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hire;
