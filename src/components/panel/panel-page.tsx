import React, { FC } from 'react';

import { Group, Panel, PanelHeader } from '@vkontakte/vkui';
import { PageConfig } from '../../types';

export const PanelPageComponent: FC<PageConfig> = ({ id, title, component }: PageConfig) => {
  const Component = component;
  return (
    <Panel id={id}>
      <PanelHeader>{title}</PanelHeader>
      <Group>
        <Component />
      </Group>
    </Panel>
  );
};
