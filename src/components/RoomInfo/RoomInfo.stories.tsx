import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MOCK_RESULT } from '~constants/index';
import RoomInfo from './RoomInfo';

export default {
  title: 'components/RoomInfo',
  component: RoomInfo,
  args: {
    imageUrl: MOCK_RESULT.imageUrl,
    productList: MOCK_RESULT.productList,
  },
} as ComponentMeta<typeof RoomInfo>;

const Template: ComponentStory<typeof RoomInfo> = (args) => <RoomInfo {...args} />;

export const Primary = Template.bind({});
