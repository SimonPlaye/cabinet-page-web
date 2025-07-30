import type React from "react";
import styles from "./DroitDesMineurs.module.css";
import { Scale, Gavel } from "lucide-react";

export const DroitDesMineurs = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.headingCompetences}>Nos Pôles de compétences</h2>
        <h2 className={styles.heading}>
          Droit des mineurs et de leurs parents
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Scale className={styles.icon} />
              <h3 className={styles.lawyerName}>
                Maître Laetitia QUINTARD PLAYE
              </h3>
              <ul className={styles.list}>
                <li>
                  Audition devant le juge aux affaires familiales ou devant le
                  juge des enfants
                </li>
                <li>
                  Assistance éducative (défense des parents et des enfants)
                </li>
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
                  Assistance devant le juge des enfants (assistance éducative,
                  placement)
                </li>
                <li>
                  Défense des mineurs convoqués en tant qu’auteurs devant le
                  tribunal pour enfants
                </li>
                <li>
                  Assistance des parents convoqués en tant que civilement
                  responsables
                </li>
                <li>
                  Assistance des incapables majeurs : tutelle, curatelle et
                  sauvegarde de justice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
