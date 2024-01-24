import { FixedLayout, Separator, Tabs } from '@vkontakte/vkui';
import React, { FC } from 'react';
import { Paths } from '../../constants';
import { PageButtonConfig } from '../../types';
import { TabButton } from '../btn';

import './layout.css';

interface IProps {
  buttonConfig: Array<PageButtonConfig>;
  activePanel: Paths;
  setActivePanel: (panel: Paths) => void;
}

export const MenuMainLayout: FC<IProps> = ({ buttonConfig, activePanel, setActivePanel }) => {
  return (
    <FixedLayout filled vertical="bottom">
      <Separator wide />
      <Tabs
        className='mini-app-main-toolbar'
       >
        {buttonConfig.map(({ icon, id, label }) => (
          <TabButton icon={icon} selected={activePanel === id} label={label} onClick={() => setActivePanel(id)} />
        ))}
      </Tabs>
    </FixedLayout>
  );
};
