import type React from "react";
import styles from "./DroitPenal.module.css";
import { Scale } from "lucide-react";

export const DroitPenal = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.headingCompetences}>Nos Pôles de compétences</h2>
        <h2 className={styles.heading}>
          Droit pénal devant les juridictions de GUINGAMP et SAINT-BRIEUC
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Scale className={styles.icon} />
              <h3 className={styles.lawyerName}>
                Maître Marie-Charlotte JUILLAN
              </h3>
              <ul className={styles.list}>
                <li>
                  Assistance devant les juridictions répressives : tribunal de
                  police, tribunal correctionnel (juge unique, comparution sur
                  reconnaissance préalable de culpabilité, collégiale)
                </li>
                <li>Défense des victimes devant toutes les juridictions</li>
                <li>
                  Défense des mineurs (auteur ou victime) devant le juge des
                  enfants et le tribunal pour enfants
                </li>
                <li>
                  Délégué du procureur : composition pénale et médiation pénale
                </li>
                <li>
                  Assistance en garde à vue et audition libre : majeurs et
                  mineurs
                </li>
                <li>
                  Assistance à l’indemnisation des victimes : saisine SARVI et
                  CIVI, transaction avec les compagnies d’assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
