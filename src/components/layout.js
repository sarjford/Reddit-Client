import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import Header from './header';
import { AppProvider } from './context';

import './layout.scss';


const Layout = ({ children }) => {
  return (
    <AppProvider>
      <Header />
      <Navigation />
      <main>{children}</main>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

