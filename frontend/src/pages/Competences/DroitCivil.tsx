import type React from "react";
import styles from "./DroitCivil.module.css";
import { Scale, Gavel } from "lucide-react";

export const DroitCivil = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.headingCompetences}>Nos Pôles de compétences</h2>
        <h2 className={styles.heading}>Droit civil</h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Scale className={styles.icon} />
              <h3 className={styles.lawyerName}>
                Maître Laetitia QUINTARD PLAYE
              </h3>
              <ul className={styles.list}>
                <li>Troubles anormaux de voisinage</li>
                <li>Bornage</li>
                <li>Servitudes (de vue, de passage etc…)</li>
                <li>Empiètement</li>
                <li>Enchères dans le cadre de vente sur saisie immobilière</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Gavel className={styles.icon} />
              <h3 className={styles.lawyerName}>
                Maître Marie-Charlotte JUILLAN
              </h3>
              <ul className={styles.list}>
                <li>
                  Baux d&aposhabitation (expulsion, loyers impayés, logement
                  vétuste…) : assistance locataire, bailleur
                </li>
                <li>Droit bancaire</li>
                <li>Litige entre les particuliers (conflits de voisinage…)</li>
                <li>Procédures devant le juge de l&aposexécution</li>
                <li>Droit des contrats</li>
                <li>Servitudes légales et conventionnelles</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
