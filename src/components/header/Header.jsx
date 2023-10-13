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
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <div className={styles.middleTitle}>
              ПЕРШІ <span className={styles.small}>КРОКИ</span>
            </div>
            <div className={styles.middleSubTitle}>
              ДО ФІНАНСОВОЇ{' '}
              <span className={styles.small + ' ' + styles.right}>
                НЕЗАЛЕЖНОСТІ
              </span>
            </div>
            <div className={styles.middleText}>
              <div className={styles.TextBlock}>
                Отримай готовий інвестиційний портфель для збільшення свого
                капіталу та приведи в порядок свої особисті фінанси всього за 4
                дні
              </div>
              <div className={styles.warning + ' ' + styles.small}>
                <div className={styles.warImage}>
                  <img src='/img/Warning.png' alt='' />
                </div>
                <div className={styles.warText}>
                  <span>Навіть якщо</span> ти повний новачок в інвестиціях
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middleRight + ' ' + styles.big}>
            <div className={styles.middleTitle + ' ' + styles.big}>КРОКИ</div>
            <div className={styles.middleSubTitle + ' ' + styles.big}>
              НЕЗАЛЕЖНОСТІ
            </div>
            <div className={styles.middleText + ' ' + styles.big}>
              <div className={styles.warning}>
                <div className={styles.warImage}>
                  <img src='/img/Warning.png' alt='' />
                </div>
                <div className={styles.warText}>
                  <span>Навіть якщо</span> ти повний новачок в інвестиціях
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src='/img/tania.png' alt='' />
          </div>
        </div>
        <div className={styles.headerbutton}>
          <button className={styles.button}>ПОЧАТИ ІНВЕСТУВАТИ</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
