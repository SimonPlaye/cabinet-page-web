import styles from "./Honoraires.module.css";

export const Honoraires = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>HONORAIRES AU CABINET</h2>
        <h3 className={styles.subheading}>Convention d&apos;honoraire</h3>
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
          Après le premier rendez-vous, le montant des honoraires de la
          procédure concernée est indiqué au client et une convention
          d’honoraires détaillée en fonction des diligences à effectuer est
          établie par la suite et soumise à l’approbation du client.
        </p>
        <p>
          Les honoraires <strong>peuvent varier</strong> en fonction de la
          difficulté du dossier et du temps consacré au traitement du dossier
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
        <p className={styles.paragraph}>
          Pour les personnes qui bénéficient d’un{" "}
          <strong>contrat protection juridique</strong>c auprès de leur
          assurance, les honoraires du cabinet seront alors en
          <strong>tout ou partie pris en charge</strong> par celle-ci. si des
          honoraires devaient rester à la charge du client, une convention
          d’honoraires sera alors établie afin que le client soit parfaitement
          informé du montant restant à sa charge
        </p>

        <h3 className={styles.subheading}>Aide juridictionnelle</h3>
        <p className={styles.paragraph}>
          Le Cabinet intervient au titre de l’aide juridictionnelle pour tout
          contentieux. En cas d’aide juridictionnelle partielle, une convention
          d’honoraires sera régularisée entre le Cabinet et le Client et soumise
          à l’approbation du Bâtonnier de l’Ordre des Avocats de SAINT-BRIEUC.
        </p>
      </div>
    </section>
  );
};
