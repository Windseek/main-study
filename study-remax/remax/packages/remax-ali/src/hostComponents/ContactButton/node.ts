import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  tntInstId: 'tnt-inst-id',
  scene: 'scene',
  size: 'size',
  color: 'color',
  icon: 'icon',
  alipayCardNo: 'alipay-card-no',
};

export const props = unique(Object.values(alias));
