import React, { useLayoutEffect, useState } from 'react';
import { IMAGE_MAX_SIZE } from '~constants/index';

const useElementSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState([IMAGE_MAX_SIZE, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      if (!ref || !ref.current) return;
      const { width, height } = ref.current.getBoundingClientRect();
      setSize([width, height]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useElementSize;
