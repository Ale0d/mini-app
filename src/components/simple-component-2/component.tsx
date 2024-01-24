import React, { FC } from 'react';

import { Div, Panel, Paragraph } from '@vkontakte/vkui';

export const SimpleComponentSecond: FC = () => (
  <Panel>
    <Div>
      <Paragraph>Второй компонент, который будет по умолчанию открыт</Paragraph>
    </Div>
  </Panel>
);
