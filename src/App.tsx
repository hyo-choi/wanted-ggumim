import React, { useEffect, useState } from 'react';
import { fetchApi } from '@api/index';

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const getData = async () => {
      setState(await fetchApi());
    };
    getData();
  }, []);

  return (
    <div>{JSON.stringify(state)}</div>
  );
};

export default App;
