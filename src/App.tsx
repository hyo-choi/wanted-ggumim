/* eslint-disable no-use-before-define */
import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';
import { useElementSize } from '~hooks/index';
import type { ResponseType } from '~types/index';
import { fetchApi } from '~api/index';
import { RoomInfo } from '~components/index';

const App = () => {
  const [state, setState] = useState<ResponseType>({ id: -1, imageUrl: '', productList: [] });
  const layoutRef = useRef(null);
  const [width] = useElementSize(layoutRef);

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>): void => {
    const cancelAllSelection = () => {
      setState((prev) => ({
        ...prev,
        productList: prev.productList.map((product) => ({ ...product, selected: false })),
      }));
    };

    const toggleSelection = (itemId: number) => {
      setState((prev) => ({
        ...prev,
        productList: prev.productList.map(
          (product) => (product.productId === Number(itemId)
            ? { ...product, selected: true } : { ...product, selected: false }),
        ),
      }));
    };

    if (e.target instanceof HTMLImageElement) {
      cancelAllSelection();
      return;
    }

    const item: HTMLDivElement | null = (e.target as HTMLDivElement).closest('.product-list-item');
    if (!item || state.id === -1) return;

    const selected: boolean = item.dataset.selected === 'true';
    const itemId: number = Number(item.dataset.itemId);

    if (selected) cancelAllSelection();
    else toggleSelection(itemId);
  }, [state.id]);

  useEffect(() => {
    const getData = async () => {
      const { id, imageUrl, productList }: ResponseType = await fetchApi();
      const list = productList.map((product) => ({ ...product, selected: false }));
      setState({ id, imageUrl, productList: list });
    };
    getData();
  }, []);

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
