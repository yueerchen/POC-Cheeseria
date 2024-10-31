import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/cheeses')
      .then(response => setCheeses(response.data))
      .catch(error => console.error('Error fetching cheeses:', error));
  }, []);

  const calculatePrice = () => {
    if (selectedCheese && weight > 0) {
      const cheese = cheeses.find(c => c.id === parseInt(selectedCheese));
      const price = cheese ? (cheese.pricePerKilo * weight) : 0;
      setTotalPrice(price);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-yellow-800 mb-8">PZ Cheeseria</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cheeses.map(cheese => (
          <div key={cheese.id} className="bg-white shadow-lg rounded-lg p-6">
            <img src={cheese.picture} alt={cheese.name} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">{cheese.name}</h2>
              <p className="text-gray-600">Color: {cheese.color}</p>
              <p className="text-lg font-bold text-yellow-600">${cheese.pricePerKilo} per kg</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Price Calculator</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Select Cheese</label>
          <select 
            onChange={e => setSelectedCheese(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Choose...</option>
            {cheeses.map(cheese => (
              <option key={cheese.id} value={cheese.id}>{cheese.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Weight (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={e => setWeight(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter weight" />
        </div>
        <button 
          onClick={calculatePrice} 
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">
          Calculate Price
        </button>
        {totalPrice !== null && (
          <p className="mt-4 text-lg text-gray-700 font-semibold text-center">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
