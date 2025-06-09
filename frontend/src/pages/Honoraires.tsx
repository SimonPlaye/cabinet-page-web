import styles from "./Honoraires.module.css";

export const Honoraires = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>HONORAIRES AU CABINET</h2>

        <p className={styles.paragraph}>
          Le coût de nos diligences fait l’objet d’une{" "}
          <strong>convention d’honoraires</strong> préalable qui comporte
          également le tarif des frais administratifs.
        </p>
        <p className={styles.paragraph}>
          Selon la nature et la complexité du dossier, les honoraires sont
          déterminés suivant un <strong>forfait</strong> ou au{" "}
          <strong>temps passé</strong>.
        </p>
        <p className={styles.paragraph}>
          Des honoraires complémentaires de <strong>résultat</strong>,
          correspondant à un pourcentage du gain définitivement obtenu ou de la
          perte évitée, peuvent éventuellement être convenus.
        </p>

        <h3 className={styles.subheading}>Protection juridique</h3>
        <p className={styles.paragraph}>
          Vous avez peut-être un contrat d’assurance de protection juridique ?
          Quelle que soit votre compagnie d’assurance vous avez toujours{" "}
          <strong>le libre choix de votre avocat</strong>. Notre cabinet vous
          proposera une{" "}
          <strong>
            convention d’honoraires intégrant la prise en charge prévue par
            votre contrat d’assurance
          </strong>
          .
        </p>

        <h3 className={styles.subheading}>Aide juridictionnelle</h3>
        <p className={styles.paragraph}>
          Notre Cabinet accepte d’intervenir au titre de l’aide
          juridictionnelle{" "}
        </p>
      </div>
    </section>
  );
};
