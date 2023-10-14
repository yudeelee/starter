import styles from './styles.module.scss';

const Why = () => {
  return (
    <div className={styles.why}>
      <div className={styles.container}>
        <div className={styles.whyHeader}>
          <span className={styles.whySubTitle}>ЧОМУ ТИ</span>
          <h2 className={styles.whyTitle}>ЩЕ НЕ ІНВЕСТУЄШ?</h2>
        </div>
        <div className={styles.whyBody}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={styles.smallDescription}>
              Більшість початківців попросту бояться втратити гроші, через брак
              знань і досвіду у сфері інвестицій та створення пасивного доходу.
            </div>
            <div className={styles.decision}>
              <div className={styles.decisionTitle}>
                <span>АЛЕ</span>Є РІШЕННЯ!
              </div>
              <div className={styles.decisionBody}>
                <span>4-денний інтенсив</span>
                <div className={styles.slog}>
                  <span className={styles.fqout}>ПЕРШІ КРОКИ</span>ДО ФІНАНСОВОЇ
                  НЕЗАЛЕЖНОСТ<span className={styles.bqout}>І</span>
                </div>
                <div className={styles.smallDescription}>
                  Як раз і створений для того, щоб допомогти тобі розібратися зі
                  своїми фінансами та зібрати свій перший фінансовий портфель,
                  який буде давати тобі 10% прибутку на рік.
                </div>
              </div>
              <div className={styles.lamp}>
                <img src='/img/lamp.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
