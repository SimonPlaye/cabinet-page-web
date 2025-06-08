import React from "react";
import styles from "./Competences.module.css";
// Use any icons you want — fallback to emojis or inline SVG if no icon library
import { Users, Briefcase, Scale, ArrowLeft } from "lucide-react"; // optional

const competences = [
  {
    title: "Droit de la famille",
    icon: Users,
    href: "/poles-de-competences/droit-de-la-famille",
  },
  {
    title: "Droit des successions",
    icon: Briefcase,
    href: "/poles-de-competences/droit-des-successions",
  },
  {
    title: "Droit pénal",
    icon: Scale,
    href: "/poles-de-competences/droit-penal",
  },
];

export const Competences = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Nos pôles de compétences</h1>
          <div className={styles.actions}>
            <a href="/" className={`${styles.button} ${styles.buttonOutline}`}>
              <ArrowLeft className={styles.icon} />
              Retour à l&apos;accueil
            </a>
            <a href="/contact" className={styles.button}>
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {competences.map((item, index) => (
            <a href={item.href} className={styles.card} key={index}>
              <div className={styles.cardContent}>
                <item.icon className={styles.cardIcon} />
                <h2 className={styles.cardTitle}>{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};
