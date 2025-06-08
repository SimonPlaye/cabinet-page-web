import { Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import { Title } from "./Title/Title";
import { ContentBox, ContentBoxGray } from "./ContentBox/ContentBox";

export const NavigationBar = (): React.JSX.Element => {
  return (
    <Navbar className={styles.Header}>
      <Title />
      <div className={styles.allContentBoxesContainer}>
        <ContentBox title="Nos pôles de compétences" />
        <ContentBox title="Nos collaborateurs" />
        <ContentBoxGray title="Contact" />
      </div>
    </Navbar>
  );
};
