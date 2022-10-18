import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Components/Country/Country'
import SelectedCountry from './Components/SelectedCountry/SelectedCountry';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(data => {
        setCountries(data);
        console.log(data)
      })
  }, []);
  const handlerAddBtn = (country) => {
    console.log('country add', country);
    setSelectedCountry([...selectedCountry, country])

  } 

  return (
    <div className="App">
      <header className="App-header">
        
        
        <h1>Country Count : {countries.length}</h1>
        <SelectedCountry selectedCountry={selectedCountry}></SelectedCountry>
        {
          countries.map(country => <Country handlerAddBtn={handlerAddBtn} country={country} key={country.name.common}></Country>)
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
