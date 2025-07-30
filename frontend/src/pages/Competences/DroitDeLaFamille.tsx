import type React from "react";
import styles from "./DroitDeLaFamille.module.css";
import { Scale } from "lucide-react";

export const DroitDeLaFamille = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.headingCompetences}>Nos Pôles de compétences</h2>
        <h2 className={styles.heading}>Droit de la famille</h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Scale className={styles.icon} />
              <h3 className={styles.lawyerName}>
                Maître Laetitia QUINTARD PLAYE
              </h3>
              <ul className={styles.list}>
                <li>Divorce judiciaire</li>
                <li>Divorce par consentement mutuel</li>
                <li>
                  Procédure relative à l’organisation de la vie à la suite de la
                  séparation de couples non mariés
                </li>
                <li>
                  Procédure relative à la séparation du patrimoine d’époux
                  divorcés, de concubins ou de couples pacsés
                </li>
                <li>Révision de prestation compensatoire</li>
                <li>Liquidation de régime matrimonial</li>
                <li>Liquidation d’indivision</li>
                <li>Droit de visite des grands-parents</li>
                <li>Contestation ou reconnaissance de filiation</li>
                <li>Adoption</li>
                <li>Succession</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
