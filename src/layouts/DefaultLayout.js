/* eslint-disable react/prop-types */
import React from 'react';
import './DefaultLayout.css';

const DefaultLayout = ({ children }) => (
  <div className="default-layout-outer-content">
    <div className="default-layout-inner-content">
      {children}
    </div>
  </div>
);

export default DefaultLayout;
