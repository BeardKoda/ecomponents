import React from "react";
import { Typography, TypographyOptions } from "../../types/theme";

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

const defaultFontFamily = "'Inter', sans-serif";

export function createTypography(typography?: TypographyOptions): Typography {
  const {
    fontFamily = defaultFontFamily,
    fontSize = 15,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 600,
    fontWeightBold = 700,
  } = typography || {};

  const pxToRem = (size: number) =>
    `${size / parseInt(fontSize.toString())}rem`;
  const buildVariant = (
    fontWeight: React.CSSProperties["fontWeight"],
    size: number,
    lineHeight: number,
    letterSpacing: number
  ) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    lineHeight,
    ...(fontFamily === defaultFontFamily
      ? { letterSpacing: `${round(letterSpacing / size)}em` }
      : {}),
  });

  const variants = {
    h1: buildVariant(fontWeightBold, 32, 1.334, -0.35),
    h2: buildVariant(fontWeightBold, 24, 1.334, -0.35),
    h3: buildVariant(fontWeightBold, 20, 1.6, 0.15),
    h4: buildVariant(fontWeightBold, 18, 1.7, 0.15),
    h5: buildVariant(fontWeightBold, 15, 1.7, -0.075),
    h6: buildVariant(fontWeightBold, 11, 1.7, -0.075),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 15, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 13, 1.43, 0.15),
    body3: buildVariant(fontWeightRegular, 11, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 15, 1.2, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1),
  };

  return {
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants,
  };
}
