import React from "react";
import styles from "./DroitCivil.module.css";
import { Briefcase } from "lucide-react"; // Replace with your icon source or inline SVG

export const DroitCivil = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Briefcase className={styles.icon} />
            <h2 className={styles.title}>Droit Civil</h2>
            <p className={styles.paragraph}>
              Notre cabinet est spécialisé dans tous les aspects du droit de la
              famille, offrant des conseils et une représentation dans des
              domaines tels que :
            </p>
            <ul className={styles.list}>
              <li>Divorce et séparation</li>
              <li>Garde d&apos;enfants et droits de visite</li>
              <li>Pension alimentaire et prestation compensatoire</li>
              <li>Adoption</li>
              <li>Protection des mineurs</li>
              <li>Contrats de mariage et PACS</li>
            </ul>
            <p className={styles.paragraph}>
              Nous comprenons la nature sensible des affaires familiales et nous
              nous efforçons d&apos;offrir un soutien compatissant et des
              solutions pratiques à nos clients pendant ces périodes difficiles.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
