import styles from "./Honoraires.module.css";

export const Honoraires = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>HONORAIRES AU CABINET</h1>
        </div>

        <div className={styles.content}>
          {/* Convention d&apos;honoraire */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.cardIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <h3 className={styles.subheading}>Convention d&apos;honoraire</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.paragraph}>
                Le coût de nos diligences fait l&apos;objet d&apos;une{" "}
                <strong>convention d&apos;honoraires</strong> préalable qui
                comporte également le tarif des frais administratifs.
              </p>

              <p className={styles.paragraph}>
                Selon la nature et la complexité du dossier, les honoraires sont
                déterminés suivant un <strong>forfait</strong> ou au{" "}
                <strong>temps passé</strong>.
              </p>

              <div className={styles.highlightBox}>
                <p className={styles.paragraph}>
                  Après le premier rendez-vous, le montant des honoraires de la
                  procédure concernée est indiqué au client et une convention
                  d&apos;honoraires détaillée en fonction des diligences à
                  effectuer est établie par la suite et soumise à
                  l&apos;approbation du client.
                </p>
              </div>

              <p className={styles.paragraph}>
                Les honoraires <strong>peuvent varier</strong> en fonction de la
                difficulté du dossier et du temps consacré au traitement du
                dossier
              </p>

              <p className={styles.paragraph}>
                Des honoraires complémentaires de <strong>résultat</strong>,
                correspondant à un pourcentage du gain définitivement obtenu ou
                de la perte évitée, peuvent éventuellement être convenus.
              </p>
            </div>
          </div>

          {/* Protection juridique */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.cardIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className={styles.subheading}>Protection juridique</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.infoBox}>
                <p className={styles.paragraph}>
                  Vous avez peut-être un contrat d&apos;assurance de protection
                  juridique ? Quelle que soit votre compagnie d&apos;assurance
                  vous avez toujours{" "}
                  <strong>le libre choix de votre avocat</strong>. Notre cabinet
                  vous proposera une{" "}
                  <strong>
                    convention d&apos;honoraires intégrant la prise en charge
                    prévue par votre contrat d&apos;assurance
                  </strong>
                  .
                </p>
              </div>

              <p className={styles.paragraph}>
                Pour les personnes qui bénéficient d&apos;un{" "}
                <strong>contrat protection juridique</strong> auprès de leur
                assurance, les honoraires du cabinet seront alors{" "}
                <strong>en tout ou partie pris en charge</strong> par celle-ci.
                Si des honoraires devaient rester à la charge du client, une
                convention d&apos;honoraires sera alors établie afin que le
                client soit parfaitement informé du montant restant à sa charge
              </p>
            </div>
          </div>

          {/* Aide juridictionnelle */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.cardIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3 className={styles.subheading}>Aide juridictionnelle</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.paragraph}>
                Le Cabinet intervient au titre de l&apos;aide juridictionnelle
                pour tout contentieux. En cas d&apos;aide juridictionnelle
                partielle, une convention d&apos;honoraires sera régularisée
                entre le Cabinet et le Client et soumise à l&apos;approbation du
                Bâtonnier de l&apos;Ordre des Avocats de SAINT-BRIEUC.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.separator}></div>
          <p className={styles.footerText}>
            Toutes nos conventions d&apos;honoraires sont établies dans le
            respect de la déontologie et de la réglementation en vigueur
          </p>
        </div>
      </div>
    </section>
  );
};
