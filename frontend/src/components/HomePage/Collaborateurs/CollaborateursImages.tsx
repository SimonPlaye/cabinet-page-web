import React from "react";
import styles from "./CollaborateursImages.module.css";

const collaborators = [
  {
    name: "Laetitia QUINTARD PLAYE",
    image: "/assets/photo_laetitia_quintard.jpeg",
    description: "Avocat au Barreau de SAINT-BRIEUC (22) depuis 1996.",
  },
  {
    name: "Marie-Charlotte JUILLAN",
    image: "/assets/photo_marie_charlotte_julian.jpg",
    description: "Avocat au Barreau de SAINT-BRIEUC (22) depuis 2010.",
  },
];

export const CollaborateursImages = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>NOS COLLABORATEURS</h2>
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
