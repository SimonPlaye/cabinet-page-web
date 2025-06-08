import { CabinetName } from "components/HomePage/CabinetName/CabinetName";
import styles from "./HomePage.module.css";

export const HomePage = (): React.JSX.Element => {
  return (
    <div className={styles.growContainer}>
      <CabinetName />
    </div>
  );
};
