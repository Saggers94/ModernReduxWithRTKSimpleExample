import React from 'react';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {incremented, amountAdded} from "./features/counter/counter-slice";
import logo from './logo.svg';
import './App.css';
import { useFetchAstronautsQuery } from './features/astronauts/astronaut-api-slice';

function App() {

  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();


  const { data = [], isFetching } = useFetchAstronautsQuery();

  const handleClick = () => { 
    //incremented by 1
    // dispatch(incremented()); 
    
    //incremented by a specific value, in this case its "3"
    dispatch(amountAdded(3)) }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>
          count is: {count}
        </button>
        
        <div>
          <p>Number of Dogs Fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {data.map(astronaut => (
                <tr key={astronaut.astronaut_id}>
                  <td>{astronaut.name}</td>
                  <td>{astronaut.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
