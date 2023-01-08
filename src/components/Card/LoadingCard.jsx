import styles from 'components/Card/Card.module.scss';
import CardImage from 'components/CardImage';

export const LoadingCard = () => (
  <li className={styles.static}>
      <CardImage sprite={null} />
      <Skeleton variant="rectangular" width={210} height={118} />
  </li>
);
