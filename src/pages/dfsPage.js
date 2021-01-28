import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import HeaderComponent from '../components/HeaderComponent';

const dfsPage = () => (
  <DefaultLayout>
    <HeaderComponent
        current="bfs"
    ></HeaderComponent>
  </DefaultLayout>
);

export default dfsPage;
