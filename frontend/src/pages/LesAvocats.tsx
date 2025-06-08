import React from "react";
import styles from "./LesAvocats.module.css";

const collaborateurs = [
  {
    name: "Me. Laetitia QUINTARD-PLAYE",
    description: "Spécialiste en droit de la famille.",
    image: "/assets/lawyer_1.jpeg",
  },
  {
    name: "Me. Marie-Charlotte JUILLAN",
    description: "Experte en droit civil.",
    image: "/assets/lawyer_2.jpeg",
  },
];

export const LesAvocats = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
