import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MOCK_RESULT } from '~constants/index';
import ProductList from './ProductList';

export default {
  title: 'components/ProductList',
  component: ProductList,
  args: {
    ...MOCK_RESULT.productList[0],
  },
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList {...args} />;

export const Normal = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const Discount = Template.bind({});
Discount.args = { ...MOCK_RESULT.productList[1] };

export const SelectedDiscount = Template.bind({});
SelectedDiscount.args = {
  ...MOCK_RESULT.productList[1],
  selected: true,
};
