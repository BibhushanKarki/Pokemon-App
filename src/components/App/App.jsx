import React from 'react';
import styles from './App.module.scss';
import Footer from '../Footer';
import Header from '../Header/Header';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Footer />
  </div>
);

export default App;
