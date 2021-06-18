import React, { useCallback, useState } from 'react'
import List from './List'
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  return (
    <div style={theme}>
      <input type="number" value={number} onChange={e => { setNumber(parseInt(e.target.value)) }} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;


// Difference between useCallback and useMemo

// useMemo -> The value is returned in place of the function

// useCallback -> The function itself is returned
