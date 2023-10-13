import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.start}>
              <span className={styles.smTile}>Старт</span>
              <span className={styles.Tile}>ПОНЕДІЛОК</span>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.name}>
              <span className={styles.firstName}>СЕЛЕЗНЬОВА</span>
              <span className={styles.secondName}>Tetyana</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.start}>
              <span className={styles.smTile}>4-денний</span>
              <span className={styles.Tile}>онлайн-інтенсив</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
