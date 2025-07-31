import styles from "./CabinetName.module.css";

export const CabinetName = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <img
        src="/assets/cabinet.jpeg"
        alt="Balance de la justice"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h1 className={styles.title}>
              <span>SELARL</span>
              <span>QUINTARD PLAYE - JUILLAN</span>
            </h1>
            <p className={styles.subtitle}>
              Avocats associés au Barreau de SAINT-BRIEUC (22)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
