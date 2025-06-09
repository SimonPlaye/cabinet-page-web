import React from "react";
import styles from "./CollaborateursImages.module.css";

const collaborators = [
  {
    name: "Laetitia QUINTARD PLAYE",
    image: "/assets/lawyer_1.jpeg",
    description: "Avocat au Barreau de SAINT-BRIEUC (22) depuis 1996.",
  },
  {
    name: "Marie-Charlotte JUILLAN",
    image: "/assets/lawyer_2.jpeg",
    description: "Avocat au Barreau de SAINT-BRIEUC (22) depuis 2010.",
  },
];

export const CollaborateursImages = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {collaborators.map((collab, index) => (
          <div className={styles.card} key={index}>
            <img
              src={collab.image}
              alt={collab.name}
              className={styles.image}
            />
            <div className={styles.textContent}>
              <h3 className={styles.name}>{collab.name}</h3>
              <p className={styles.description}>{collab.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
