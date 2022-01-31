/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useElementSize } from '~hooks/index';
import type { ProductType } from '~types/index';
import { calcRoomInfoWidth } from '~utils/index';
import { ProductList } from '~components/index';

interface RoomInfoProps {
  onClick: React.MouseEventHandler;
  parentWidth: number;
  imageUrl: string;
  productList: ProductType[],
}

const RoomInfo = ({
  onClick, parentWidth, imageUrl, productList,
}: RoomInfoProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width] = useElementSize(imgRef);

  // TODO: tooltip이랑 list에 width 넘겨줘서 반응형 만들기

  return (
    <Container width={calcRoomInfoWidth(parentWidth)}>
      <ImageContainer>
        {width}
        <img src={imageUrl} alt="방 사진" width="100%" ref={imgRef} onClick={onClick} />
      </ImageContainer>
      <ListContainer>
        {productList.map(({
          productId, productName, imageUrl: url, selected, discountRate,
        }) => (
          <ProductList
            key={productId}
            onClick={onClick}
            productId={productId}
            productName={productName}
            discountRate={discountRate}
            imageUrl={url}
            selected={selected}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

interface ContainerType {
  width: number;
}

const Container = styled.article<ContainerType>`      
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ width }) => (width)}px;
  overflow: hidden;
`;

const ImageContainer = styled.section`
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
`;

const ListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`;

export default RoomInfo;
