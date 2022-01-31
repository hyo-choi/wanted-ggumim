import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useElementSize } from '~hooks/index';
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

export const Primary: ComponentStory<typeof RoomInfo> = (args) => {
  const divRef = useRef(null);
  const [width] = useElementSize(divRef);

  return <div ref={divRef}><RoomInfo {...args} parentWidth={width} /></div>;
};
