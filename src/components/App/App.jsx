import styles from 'components/App/App.module.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Footer />
  </div>
);

export default App;
