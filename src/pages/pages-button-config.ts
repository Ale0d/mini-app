import { Icon16UserOutline } from '@vkontakte/icons';

import { Paths } from '../constants';
import { PageButtonConfig } from '../types';

export const PAGES_BUTTON_CONFIG: Array<PageButtonConfig> = [
  {
    id: Paths.First,
    icon: Icon16UserOutline,
    label: 'Первая страница',
  },
  {
    id: Paths.Second,
    icon: Icon16UserOutline,
    label: 'Вторая страница',
  },
  {
    id: Paths.Third,
    icon: Icon16UserOutline,
    label: 'Третья страница',
  },
];
