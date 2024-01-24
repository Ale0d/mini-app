import React, { FC } from 'react';

import { Div, Panel, Paragraph } from '@vkontakte/vkui';

export const SimpleComponentFirst: FC = () => (
  <Panel>
    <Div>
      <Paragraph>Первый компонент</Paragraph>
    </Div>
  </Panel>
);
