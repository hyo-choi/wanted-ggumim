/* eslint-disable no-use-before-define */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useElementSize } from '~hooks/index';
import type { ResponseType } from '~types/index';
import { fetchApi } from '~api/index';
import { RoomInfo } from '~components/index';

const App = () => {
  const [state, setState] = useState<ResponseType>();
  const layoutRef = useRef(null);
  const [width] = useElementSize(layoutRef);

  useEffect(() => {
    const getData = async () => {
      const { id, imageUrl, productList }: ResponseType = await fetchApi();
      const list = productList.map((product) => ({ ...product, selected: false }));
      setState({ id, imageUrl, productList: list });
    };
    getData();
  }, []);

  if (!state) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout ref={layoutRef}>
      <RoomInfo parentWidth={width} imageUrl={state.imageUrl} productList={state.productList} />
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
