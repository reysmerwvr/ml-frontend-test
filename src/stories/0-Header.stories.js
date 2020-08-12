import React from 'react';
import Header from '../components/common/Header';
import { ProductsContextProvider } from '../contexts/ProductsContext';
import '../assets/sass/App.scss';
import '../assets/sass/components/Header.scss';

export default {
  title: 'Header',
  component: Header,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  decorators: [
    (storyFn) => <ProductsContextProvider>{storyFn()}</ProductsContextProvider>,
  ],
};

export const Default = () => <Header />;
