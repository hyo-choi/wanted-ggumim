/* eslint-disable implicit-arrow-linebreak */
import { IMAGE_MAX_SIZE } from '~constants/index';
import type { CalcPointsArgsType, CalcPointsReturnType } from '~types/index';

export const calcRoomInfoWidth = (parentWidth: number): number => {
  if (parentWidth === 0) return IMAGE_MAX_SIZE;
  return IMAGE_MAX_SIZE > parentWidth ? parentWidth : IMAGE_MAX_SIZE;
};

export const calcPoints = ({
  pointX,
  pointY,
  originX,
  originY,
  width,
  height,
}: CalcPointsArgsType): CalcPointsReturnType => {
  const position: string[] = [];
  let x: number;
  let y: number;
  const right: string = `
    left: -160px;
    &::before {
      left: unset;
      right: 34px;
    }
  `;
  const bottom: string = `
    top: unset;
    bottom: 52px;
    &::before {
      top: unset;
      bottom: -8px;
      transform: rotate(180deg);
    }`;

  if (width === 0 || height === 0) {
    x = pointY * 1.6;
    y = pointX * 1.6;
    if (IMAGE_MAX_SIZE - x < IMAGE_MAX_SIZE / 2) {
      position.push(right);
    }
    if (IMAGE_MAX_SIZE - y < IMAGE_MAX_SIZE / 2) {
      position.push(bottom);
    }
  } else {
    x = (pointY / originY) * height * 2;
    y = (pointX / originX) * width * 2;
    if (width - x < width / 2) {
      position.push(right);
    }
    if (height - y < height / 2) {
      position.push(bottom);
    }
  }

  return {
    pointX: x,
    pointY: y,
    position,
  };
};

export const addComma = (str: string) =>
  String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
