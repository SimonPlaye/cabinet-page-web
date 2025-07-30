import React from "react";
import styles from "./LesAvocats.module.css";

const collaborateurs = [
  {
    name: "Me. Laetitia QUINTARD-PLAYE",
    description: "Spécialiste en droit de la famille.",
    image: "/assets/photo_laetitia_quintard.jpeg",
  },
  {
    name: "Me. Marie-Charlotte JUILLAN",
    description: "Experte en droit civil.",
    image: "/assets/photo_marie_charlotte_julian.jpg",
  },
];

export const LesAvocats = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.heading}>LES AVOCATS</h2>
        <div className={styles.grid}>
          {collaborateurs.map((collab, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{collab.name}</h2>
              </div>
              <div className={styles.imageWrapper}>
                <img
                  src={collab.image}
                  alt={collab.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>{collab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
