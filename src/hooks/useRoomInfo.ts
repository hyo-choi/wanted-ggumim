import { useRef } from 'react';
import { useElementSize } from '~hooks/index';

const useRoomInfo = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, height] = useElementSize(imgRef);
  return { imgRef, width, height };
};

export default useRoomInfo;
