import React from "react";
import styles from "./Competences.module.css";
import { Link } from "react-router-dom";
import { Users, Briefcase, Scale } from "lucide-react"; // Replace with your icon source

const competences = [
  {
    title: "Droit de la famille",
    icon: Users,
    href: "/competences/droit-de-la-famille",
  },
  {
    title: "Droit des mineurs",
    icon: Briefcase,
    href: "/competences/droit-des-mineurs",
  },
  {
    title: "Droit pénal",
    icon: Scale,
    href: "/competences/droit-penal",
  },
];

export const Competences = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NOS PÔLES DE COMPÉTENCES</h2>
        <div className={styles.grid}>
          {competences.map((item, index) => (
            <Link to={item.href} key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <item.icon className={styles.icon} />
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
