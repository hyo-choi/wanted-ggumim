import { useRef } from 'react';
import { useElementSize, useSwipe } from '~hooks/index';

const useRoomInfo = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, height] = useElementSize(imgRef);
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    diffX,
    isAnimating,
    listRef,
  } = useSwipe();

  return {
    imgRef,
    listRef,
    width,
    height,
    isAnimating,
    diffX,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useRoomInfo;
