import styles from "./CabinetName.module.css";

export const CabinetName = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <img
        src="/assets/balance.jpg"
        alt="Balance de la justice"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h1 className={styles.title}>
              <span>Cabinet d&apos;avocat</span>
              <span>QUINTARD-PLAYE - JUILLAN</span>
            </h1>
            <p className={styles.subtitle}>
              Expertise juridique à votre service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
