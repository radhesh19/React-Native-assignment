
import React from 'react';
import NavigationService from './src/navigationService';
import store from './src/redux/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationService />
    </Provider>
  );
}

export default App;
