/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useElementSize } from '~hooks/index';
import type { ResponseType } from '~types/api';

const RoomInfo = ({ imageUrl, productList }: ResponseType) => {
  const imgRef = useRef(null);
  const [width] = useElementSize(imgRef);
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="방 사진" width="100%" ref={imgRef} />
        {/* 툴팁 */}
      </ImageContainer>
      <ListContainer>
        {productList.map(({ productId, productName, imageUrl: url }) => (
          <React.Fragment key={productId}>
            <img src={url} alt={`${productName} 이미지`} />
          </React.Fragment>
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.article`      
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.section`
  position: relative;
`;

const ListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`;

export default RoomInfo;
