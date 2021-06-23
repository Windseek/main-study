import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  name: 'name',
  checked: 'checked',
  disabled: 'disabled',
  color: 'color',
  onChange: 'onChange',
  controlled: 'controlled',
};

export const props = unique(Object.values(alias));
