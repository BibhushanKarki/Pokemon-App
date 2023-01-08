import React from 'react';
import styles from './App.module.scss';
import Footer from '../Footer';
import Header from '../Header';
import CardList from '../CardList';

const App = () => (
  <div className={styles.app}>
    <Header />
    <CardList />
    <Footer />
  </div>
);

export default App;
