import React, { useCallback, useRef, useState } from 'react';

interface StatusType {
  x: number;
  moveX: number;
  isMouseDown: boolean;
  isAnimating: boolean;
}

const initialState: StatusType = {
  x: 0, moveX: 0, isMouseDown: false, isAnimating: false,
};

const useSwipe = () => {
  const [{
    x, moveX, isMouseDown, isAnimating,
  }, setPoints] = useState<StatusType>(initialState);
  const listRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setPoints((prev) => ({
      x: e.clientX + prev.x - prev.moveX, moveX: e.clientX, isMouseDown: true, isAnimating: false,
    }));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isMouseDown) return;
    setPoints((prev) => ({
      ...prev, moveX: e.clientX, isAnimating: false,
    }));
  }, [isMouseDown]);

  const handleMouseUp = useCallback(() => {
    if (!isMouseDown) return;
    const containerWidth = listRef.current?.getBoundingClientRect().width || 0;
    const diffX = x - moveX;
    setPoints((prev) => {
      if (diffX >= 0 && diffX <= containerWidth) {
        return {
          ...prev,
          isMouseDown: false,
          isAnimating: true,
        };
      }
      return {
        x: diffX < 0 ? 0 : containerWidth,
        moveX: 0,
        isMouseDown: false,
        isAnimating: true,
      };
    });
    setTimeout(() => {
      setPoints((prev) => ({
        ...prev,
        isAnimating: false,
      }));
    }, 300);
  }, [x, moveX, isMouseDown, isAnimating]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    diffX: x - moveX,
    isAnimating,
    listRef,
  };
};

export default useSwipe;
