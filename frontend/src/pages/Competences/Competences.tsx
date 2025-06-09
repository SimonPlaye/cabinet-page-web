import React from "react";
import styles from "./Competences.module.css";
import { Users, UserCircle, Briefcase, Scale } from "lucide-react";

const competences = [
  {
    title: "Droit de la famille",
    icon: Users,
    href: "/competences/droit-de-la-famille",
  },
  {
    title: "Droit des mineurs",
    icon: UserCircle,
    href: "/competences/droit-des-mineurs",
  },
  {
    title: "Droit pénal",
    icon: Scale,
    href: "/competences/droit-penal",
  },
  {
    title: "Droit civil",
    icon: Briefcase,
    href: "/competences/droit-civil",
  },
];

export const Competences = (): React.JSX.Element => {
  return (
    <div className={styles.page}>
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
