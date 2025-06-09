import React from "react";
import styles from "./NousContacter.module.css";

export const NousContacter = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NOUS CONTACTER</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.subheading}>Horaires d&apos;ouverture</h3>
            <p className={styles.paragraph}>
              Nous recevons sur rendez-vous du lundi au vendredi.
            </p>
            <p className={styles.paragraph}>
              En revanche, le secrétariat est <strong>uniquement</strong> ouvert
              du lundi au jeudi de 9h à 12h et de 14h à 18h et le vendredi de 9h
              à 12h.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>Coordonnées</h3>
            <p className={styles.paragraph}>
              Cabinet d&apos;avocat QUINTARD PLAYE - JUILLAN
            </p>
            <p className={styles.paragraph}>1 rue du Général de Gaulle</p>
            <p className={styles.paragraph}>22200 GUINGAMP</p>
            <p className={styles.paragraph}>
              Email :{" "}
              <a
                href="mailto:avocat@quintard-juillan.fr"
                className={styles.emailLink}
              >
                avocat@quintard-juillan.fr
              </a>
            </p>
            <p className={styles.paragraph}>Téléphone : 02 96 43 84 52</p>
          </div>
        </div>
      </div>
    </section>
  );
};
