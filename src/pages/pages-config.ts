
import { SimpleComponentFirst, SimpleComponentSecond, SimpleComponentThird } from '../components';
import { Paths } from '../constants/paths';
import { PageConfig } from '../types/config';

export const PAGES_CONFIG: Array<PageConfig> = [
  {
    id: Paths.First,
    title: 'Первая страница',
    component: SimpleComponentFirst,
  },
  {
    id: Paths.Second,
    title: 'Вторая страница',
    component: SimpleComponentSecond,
  },
  {
    id: Paths.Third,
    title: 'Третья страница',
    component: SimpleComponentThird,
  },
];
