import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface SwiperProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  activeClassName?: string;
  changingClassName?: string;
  autoplay?: boolean;
  current?: number;
  duration?: number;
  interval?: number;
  circular?: boolean;
  vertical?: boolean;
  previousMargin?: string;
  nextMargin?: string;
  acceleration?: boolean;
  disableProgrammaticAnimation?: boolean;
  disableTouch?: boolean;
  onChange?: (e: any) => void;
  onTransition?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;
}

export const Swiper = createHostComponent<SwiperProps>('swiper') as React.ComponentType<SwiperProps>;
