'use client';

import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <nav>navbar</nav>
      {children}
    </>
  );
};
