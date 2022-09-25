import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

export interface PositionProps {
  position?: ResponsiveValue<CSSProperties['position']>;
  zIndex?: ResponsiveValue<CSSProperties['zIndex']>;
  top?: ResponsiveValue<CSSProperties['top']>;
  right?: ResponsiveValue<CSSProperties['right']>;
  bottom?: ResponsiveValue<CSSProperties['bottom']>;
  left?: ResponsiveValue<CSSProperties['left']>;
}
