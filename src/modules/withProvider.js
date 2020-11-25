import React from 'react'

import { Provider } from "react-redux";

import configureStore from '../store/configureAppStore';

const store = configureStore();

const withProvider = WrappedComponent => {
  return props => {
    return (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    )
  };
};

export default withProvider;