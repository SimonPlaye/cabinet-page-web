import React from "react";
import styles from "./DroitDesMineurs.module.css";
import { Briefcase } from "lucide-react";

export const DroitDesMineurs = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Briefcase className={styles.icon} />
            <h2 className={styles.title}>Droit des successions</h2>
            <p className={styles.paragraph}>
              Notre cabinet offre une expertise approfondie en droit des
              successions, couvrant tous les aspects de la planification
              successorale et du règlement des successions, notamment :
            </p>
            <ul className={styles.list}>
              <li>Rédaction et contestation de testaments</li>
              <li>Planification successorale</li>
              <li>Administration de successions</li>
              <li>Règlement des litiges successoraux</li>
              <li>Donations et legs</li>
              <li>Fiscalité successorale</li>
            </ul>
            <p className={styles.paragraph}>
              Nous nous engageons à guider nos clients à travers les complexités
              du droit des successions, en veillant à ce que leurs volontés
              soient respectées et que leurs héritiers soient protégés.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
