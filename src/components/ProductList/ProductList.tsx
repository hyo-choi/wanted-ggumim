/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { BADGE_IMAGE_URL } from '~constants/index';

interface ProductListType {
  onClick: React.MouseEventHandler;
  productId: number;
  productName: string;
  discountRate: number;
  imageUrl: string;
  selected: boolean;
}

const ProductList = ({
  productId,
  productName,
  discountRate,
  imageUrl,
  selected,
  onClick,
}: ProductListType) => (
  <Wrapper className="product-list-item" data-item-id={productId} data-selected={selected} selected={selected} onClick={onClick}>
    <ListItem src={imageUrl} data-product-name={productName} selected={selected}>
      {discountRate !== 0 && <Badge>{`${discountRate}%`}</Badge>}
    </ListItem>
  </Wrapper>
);

interface WrapperType {
  selected: boolean;
}

interface ItemType {
  selected: boolean;
  src: string;
}

const Wrapper = styled.div<WrapperType>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 28px 6px;
  user-select: none;

  ${({ selected }) => (selected
    ? `background: linear-gradient(163.54deg,#ff659e 8.22%,#f56b30 94.1%);
    margin: 26px 4px;
    padding: 2px;
    border-radius: 18px;` : ''
  )}
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  width: 24px;
  height: 28px;
  background-image: url(${BADGE_IMAGE_URL});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

const ListItem = styled.div<ItemType>`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid ${({ selected }) => (selected ? '#fff' : '#aaafb9')};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ src }) => src});
  user-select: none;
`;

export default ProductList;
