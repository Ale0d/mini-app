import React from 'react';

import { IconButton, TabsItem } from '@vkontakte/vkui';
import { IconButton as IconButtonType } from '../../types/icon';

import './tab.css'

interface IProps {
  label: string;
  selected: boolean;
  icon: React.FC<IconButtonType>;
  onClick: () => void;
}

export const TabButton: React.FC<IProps> = ({ label, icon, onClick, selected }) => (
  <TabsItem aria-label={label} title={label} selected={selected} tabIndex={selected ? 0 : undefined} onClick={onClick}>
    <IconButton className='mini-app-toolbar-item-btn' hasActive={false} hasHover={false} Component={icon} width={22} height={22} />
  </TabsItem>
);
