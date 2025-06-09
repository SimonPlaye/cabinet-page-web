import styles from "./NotreCabinet.module.css";

export const NotreCabinet = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>NOTRE CABINET</h2>
      <p className={styles.paragraph}>
        Nous sommes un cabinet d&apos;avocat situé à côté du tribunal de
        proximité de GUINGAMP (22).
      </p>
    </section>
  );
};
