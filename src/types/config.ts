import { FC } from 'react';
import { Paths } from '../constants';
import { IconButton } from './icon';

export type PageConfig = { id: string; title: string; component: React.FC };

export type PageButtonConfig = {
  id: Paths;
  icon: FC<IconButton>;
  label: string;
};
