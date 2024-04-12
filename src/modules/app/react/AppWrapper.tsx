'use client';

import { app } from '@/modules/app/main';
import { DependenciesProvider } from '@/modules/app/react/DependenciesProvider';
import React from 'react';
import { Provider } from 'react-redux';

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={app.store}>
      <DependenciesProvider dependencies={app.dependencies}>{children}</DependenciesProvider>
    </Provider>
  );
};
