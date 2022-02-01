/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useRoomInfo } from '~hooks/index';
import type { ProductType } from '~types/index';
import { calcRoomInfoWidth } from '~utils/index';
import { ProductList, ProductTooltip } from '~components/index';

interface RoomInfoProps {
  onClick: React.MouseEventHandler;
  parentWidth: number;
  imageUrl: string;
  productList: ProductType[],
}

const RoomInfo = ({
  onClick, parentWidth, imageUrl, productList,
}: RoomInfoProps) => {
  const { imgRef, width, height } = useRoomInfo();

  return (
    <Container componentWidth={calcRoomInfoWidth(parentWidth)}>
      <ImageContainer>
        <img src={imageUrl} alt="방 사진" width="100%" ref={imgRef} onClick={onClick} />
        {productList.map(({
          productId,
          productName,
          outside,
          pointX,
          pointY,
          priceOriginal,
          priceDiscount,
          discountRate,
          imageUrl: url,
          selected,
        }) => (
          <ProductTooltip
            key={productId}
            onClick={onClick}
            parentWidth={width}
            parentHeight={height}
            productId={productId}
            productName={productName}
            outside={outside}
            pointX={pointX}
            pointY={pointY}
            priceOriginal={priceOriginal}
            priceDiscount={priceDiscount}
            discountRate={discountRate}
            imageUrl={url}
            selected={selected}
            originX={imgRef.current?.naturalWidth || 0}
            originY={imgRef.current?.naturalHeight || 0}
          />
        ))}
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
  componentWidth: number;
}

const Container = styled.article<ContainerType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ componentWidth }) => componentWidth}px;
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
