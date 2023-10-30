import styles from './styles.module.scss';

const Result = () => {
  return (
    <div className={styles.why}>
      <div className={styles.container}>
        <div className={styles.whyHeader}>
          <span className={styles.whySubTitle}>ЯК</span>
          <h2 className={styles.whyTitle}>РЕЗУЛЬТАТ ІНТЕНСИВА</h2>
        </div>
        <div className={styles.resultBody}>
          <div className={styles.left}>
            <img src='/img/chem.png' alt='' />
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              <span>Ти отримаєш</span> свій перший інвест-портфель та зробиш
              перший крок до свободи та пасивного доходу.
            </div>
            <div className={styles.button}>
              <button className={styles.resultButton}>
                СТВОРИТИ ІНВЕСТ-ПОРТФЕЛЬ
              </button>
            </div>
            <div className={styles.backimage}>
              <img src='/img/dolback1.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
