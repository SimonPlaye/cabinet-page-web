import type React from "react"
import styles from "./NotreCabinet.module.css"

export const NotreCabinet = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NOTRE CABINET</h2>

        <div className={styles.content}>
          <div className={styles.introduction}>
            <p className={styles.paragraph}>
              Bienvenue au cabinet d&apos;Avocats QUINTARD PLAYE et JUILLAN situé en plein centre-ville de GUINGAMP
              juste à côté du tribunal de proximité.
            </p>
          </div>

          <div className={styles.lawyers}>
            <div className={styles.lawyer}>
              <h3 className={styles.lawyerName}>Maître QUINTARD PLAYE</h3>
              <p className={styles.paragraph}>
                Maître QUINTARD PLAYE a prêté serment en 1996 et exerce principalement dans le domaine du droit de la
                famille et des personnes mais également en droit des mineurs et droit civil et justifie de 30 années
                d'expérience.
              </p>
            </div>

            <div className={styles.lawyer}>
              <h3 className={styles.lawyerName}>Maître JUILLAN</h3>
              <p className={styles.paragraph}>
                Maître JUILLAN, titulaire d'un DESS carrières judiciaires a prêté serment en 2010.
              </p>
              <p className={styles.paragraph}>
                Elle a débuté sa carrière dans un cabinet généraliste ce qui lui a permis d'acquérir une formation
                pluridisplinaire dans des matières aussi diverses que le droit civil, le droit pénal, le droit des
                victimes et celui des mineurs qui sont à ce jour ses principaux domaines d'activité.
              </p>
            </div>
          </div>

          <div className={styles.practice}>
            <p className={styles.paragraph}>
              Maîtres QUINTARD PLAYE et JUILLAN assurent conseil et défense principalement auprès des juridictions de
              BRETAGNE mais aussi auprès de la cour d'appel de RENNES.
            </p>
            <p className={styles.paragraph}>
              Le cabinet est situé à GUINGAMP mais Maîtres QUINTARD PLAYE et JUILLAN peuvent en cas de besoin vous
              recevoir sur SAINT-BRIEUC.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
