import React from "react";
import styles from "./Footer.module.css";
import { Mail, Phone } from "lucide-react";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.line}>
          Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN
        </p>
        <p className={styles.line}>
          1 rue du Général de Gaulle, 22200 Guingamp
        </p>
        <p className={styles.phoneLine}>
          <Mail className={styles.icon} />
          <a
            href="mailto:avocat@quintard-juillan.fr"
            className={styles.emailLink}
          >
            avocat@quintard-juillan.fr
          </a>
        </p>
        <p className={styles.phoneLine}>
          <Phone className={styles.icon} />
          02 96 43 84 52
        </p>
      </div>
    </footer>
  );
};
