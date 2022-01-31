import React, { useLayoutEffect, useState } from 'react';

const useElementSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState([0, 0]);
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
