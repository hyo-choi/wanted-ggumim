/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  TOOLTIP_ARROW, TOOLTIP_CLOSE, TOOLTIP_GOTO_ARROW, TOOLTIP_OPEN,
} from '~constants/index';
import type { CalcPointsReturnType, ProductType } from '~types/index';
import { addComma, calcPoints } from '~utils/index';

interface ProductTooltipType extends ProductType {
  onClick: React.MouseEventHandler;
  parentWidth: number;
  parentHeight: number;
  originX: number;
  originY: number;
}

const ProductTooltip = ({
  onClick,
  parentWidth,
  parentHeight,
  originX,
  originY,
  productId,
  productName,
  outside,
  pointX,
  pointY,
  priceDiscount,
  discountRate,
  imageUrl,
  selected,
}: ProductTooltipType) => {
  const [{ pointX: x, pointY: y, position }, setSize] = useState<CalcPointsReturnType>(calcPoints({
    pointX, pointY, originX, originY, width: parentWidth, height: parentHeight,
  }));

  useEffect(() => {
    setSize(calcPoints({
      pointX, pointY, originX, originY, width: parentWidth, height: parentHeight,
    }));
  }, [pointX, pointY, originX, originY, parentWidth, parentHeight]);

  return (
    <Wrapper
      className="product-list-item"
      onClick={onClick}
      data-item-id={productId}
      data-selected={selected}
      pointX={x}
      pointY={y}
    >
      <Icon src={selected ? TOOLTIP_CLOSE : TOOLTIP_OPEN} alt="툴팁 버튼" />
      {selected && (
        <Tooltip href="/" inImagePosition={position}>
          <ProductImage src={imageUrl} />
          <ProductDesc>
            <div>{productName}</div>
            <PriceContainer>
              {outside ? <Price outside>예상가</Price> : (
                <Price>{`${discountRate}%`}</Price>
              )}
              <Price price>{addComma(String(priceDiscount))}</Price>
            </PriceContainer>
          </ProductDesc>
          <ProductArrow>
            <img src={TOOLTIP_GOTO_ARROW} alt="상품 보기" width="20px" height="20px" />
          </ProductArrow>
        </Tooltip>
      )}
    </Wrapper>
  );
};

interface WrapperType {
  pointX: number;
  pointY: number;
}

interface TooltipType {
  inImagePosition: string[];
}

interface PriceType {
  price?: boolean;
  outside?: boolean;
}

const Wrapper = styled.button.attrs<WrapperType>(({ pointX, pointY }) => ({
  style: {
    top: `${pointY}px`,
    left: `${pointX}px`,
  },
}))<WrapperType>`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
`;

const Icon = styled.img`
  margin: 0 auto;
  width: 32px;
  height: 32px;
  user-select: none;
`;

const Tooltip = styled.a<TooltipType>`
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  background-color: rgba(255,255,255,0.95);
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;

  &, &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(${TOOLTIP_ARROW});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
  ${({ inImagePosition }) => inImagePosition.join(' ')}
`;

const ProductImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  word-break: keep-all;
  width: 100%;
  height: 100%
`;

const ProductArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const Price = styled.span<PriceType>`
  font-size: 1.2em !important;
  font-weight: bold;

  ${({ price, outside }) => {
    if (price) return '';
    return `
      margin-right: 4px;
      color: ${outside ? '#898f94' : '#ff585d'};
      font-size: ${outside ? '11px' : '1.2em'} !important;
    `;
  }}
`;

export default ProductTooltip;
