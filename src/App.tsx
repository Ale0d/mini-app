import { AdaptivityProvider, AppRoot, ConfigProvider, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import React, { useState } from 'react';

import { PanelPageComponent } from './components';
import { MenuMainLayout } from './components/tabs/layout';
import { FIRST_PAGE, Paths } from './constants';
import { PAGES_BUTTON_CONFIG } from './pages/pages-button-config';
import { PAGES_CONFIG } from './pages/pages-config';

const App = () => {
  const [activePanel, setActivePanel] = useState<Paths>(FIRST_PAGE);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            {PAGES_CONFIG.map((config) => (
              <PanelPageComponent {...config} />
            ))}
          </View>
          <MenuMainLayout activePanel={activePanel} setActivePanel={setActivePanel} buttonConfig={PAGES_BUTTON_CONFIG} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
