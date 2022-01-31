/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { ResponseType } from '~types/index';
import { fetchApi } from '~api/index';

const App = () => {
  const [state, setState] = useState<ResponseType>();

  useEffect(() => {
    const getData = async () => {
      setState(await fetchApi());
    };
    getData();
  }, []);

  if (!state) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      <h1>{state.id}</h1>
      <img src={state.imageUrl} alt="방 이미지" />
      {state.productList.map(({ productId, productName, imageUrl }) => (
        <React.Fragment key={productId}>
          <div>{productName}</div>
          <img src={imageUrl} alt={`${productName} 이미지`} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
`;

export default App;
