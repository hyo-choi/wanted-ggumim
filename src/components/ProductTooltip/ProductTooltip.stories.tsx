import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useElementSize } from '~hooks/index';
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
  const divRef = useRef(null);
  const [width] = useElementSize(divRef);

  return <ProductTooltip {...args} parentWidth={width} />;
};

export const Inside = Template.bind({});

export const InsideSelected = Template.bind({});
InsideSelected.args = {
  selected: true,
};

export const Outside = Template.bind({});
Outside.args = { ...MOCK_RESULT.productList[1] };

export const OutsideSelected = Template.bind({});
OutsideSelected.args = {
  ...MOCK_RESULT.productList[1],
  selected: true,
};
