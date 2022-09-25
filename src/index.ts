import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { PositionProps } from './types';

const config: SystemConfig<PositionProps> = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: ThemeKey.zIndices,
  },
  top: {
    property: 'top',
    scale: ThemeKey.space,
  },
  right: {
    property: 'right',
    scale: ThemeKey.space,
  },
  bottom: {
    property: 'bottom',
    scale: ThemeKey.space,
  },
  left: {
    property: 'left',
    scale: ThemeKey.space,
  },
};

export const position = system(config);

export { PositionProps };
export default position;
