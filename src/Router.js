import React from 'react';
import store from './store';
import {Provider} from 'react-redux';

export default function Router() {
  return <Provider store={store}></Provider>;
}
