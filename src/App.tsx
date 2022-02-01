/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { RoomInfo } from '~components/index';
import { useGgumim } from '~hooks/index';

const App = () => {
  const {
    state,
    width,
    layoutRef,
    handleClick,
  } = useGgumim();

  if (state.id === -1) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout ref={layoutRef}>
      <RoomInfo
        parentWidth={width}
        imageUrl={state.imageUrl}
        productList={state.productList}
        onClick={handleClick}
      />
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
