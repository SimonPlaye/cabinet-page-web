import { CabinetName } from "components/HomePage/CabinetName/CabinetName";
import styles from "./HomePage.module.css";
import { NotreCabinet } from "components/HomePage/NotreCabinet/NotreCabinet";

export const HomePage = (): React.JSX.Element => {
  return (
    <div className={styles.growContainer}>
      <CabinetName />
      <NotreCabinet />
    </div>
  );
};
