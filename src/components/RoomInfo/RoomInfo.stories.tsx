import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MOCK_RESULT } from '~constants/index';
import { useGgumim } from '~hooks/index';
import RoomInfo from './RoomInfo';

export default {
  title: 'components/RoomInfo',
  component: RoomInfo,
  args: {
    imageUrl: MOCK_RESULT.imageUrl,
  },
} as ComponentMeta<typeof RoomInfo>;

export const Primary: ComponentStory<typeof RoomInfo> = (args) => {
  const {
    state,
    width,
    layoutRef,
    handleClick,
  } = useGgumim();

  return (
    <div ref={layoutRef}>
      <RoomInfo
        {...args}
        parentWidth={width}
        onClick={handleClick}
        productList={state.productList}
      />
    </div>
  );
};
