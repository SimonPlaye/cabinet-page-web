import { CabinetName } from "components/HomePage/CabinetName/CabinetName";
import styles from "./HomePage.module.css";
import { NotreCabinet } from "components/HomePage/NotreCabinet/NotreCabinet";
import { Competences } from "components/HomePage/Competences/Competences";
import { CollaborateursImages } from "components/HomePage/Collaborateurs/CollaborateursImages";
import { NousContacter } from "components/HomePage/NousContacter/NousContacter";

export const HomePage = (): React.JSX.Element => {
  return (
    <div className={styles.growContainer}>
      <CabinetName />
      <NotreCabinet />
      <CollaborateursImages />
      <Competences />
      <NousContacter />
    </div>
  );
};
