/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
import { IMAGE_MAX_SIZE } from '~constants/index';

export const calcRoomInfoWidth = (parentWidth: number): number =>
  IMAGE_MAX_SIZE > parentWidth ? parentWidth : IMAGE_MAX_SIZE;
