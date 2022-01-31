/* eslint-disable import/prefer-default-export */
import { IMAGE_MAX_SIZE } from '~constants/index';

export const calcRoomInfoWidth = (parentWidth: number): number => {
  if (parentWidth === 0) return IMAGE_MAX_SIZE;
  return IMAGE_MAX_SIZE > parentWidth ? parentWidth : IMAGE_MAX_SIZE;
};
