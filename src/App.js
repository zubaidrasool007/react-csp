import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setAPIData] = useState([]);
  const [dispData, setDispData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(x => (x.json()))
    .then(res => {
      console.log('Response -> ', res);
    });
  }, []);

  const pageChanged = (newPage) => {
    const lastVisitedPage = (newPage - 1) * 10;
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
