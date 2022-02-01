/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRoomInfo } from '~hooks/index';
import { MOCK_RESULT } from '~constants/index';
import ProductTooltip from './ProductTooltip';

export default {
  title: 'components/ProductTooltip',
  component: ProductTooltip,
  args: {
    ...MOCK_RESULT.productList[0],
  },
} as ComponentMeta<typeof ProductTooltip>;

const Template: ComponentStory<typeof ProductTooltip> = (args) => {
  const { imgRef, width, height } = useRoomInfo();
  // eslint-disable-next-line no-console
  const handleClick = useCallback(() => console.log('clicked!'), []);

  return (
    <TooltipContainer ref={imgRef}>
      <ProductTooltip
        {...args}
        parentWidth={width}
        parentHeight={height}
        originX={800}
        originY={500}
        onClick={handleClick}
      />
    </TooltipContainer>
  );
};

export const Inside = Template.bind({});
Inside.args = {
  pointX: 100,
  pointY: 100,
};

export const InsideSelected = Template.bind({});
InsideSelected.args = {
  pointX: 100,
  pointY: 100,
  selected: true,
};

export const Outside = Template.bind({});
Outside.args = {
  ...MOCK_RESULT.productList[1],
  pointX: 200,
  pointY: 100,
};

export const OutsideSelected = Template.bind({});
OutsideSelected.args = {
  ...MOCK_RESULT.productList[1],
  pointX: 200,
  pointY: 100,
  selected: true,
};

const TooltipContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 50vw;
  border: 1px solid #ddd;
`;
