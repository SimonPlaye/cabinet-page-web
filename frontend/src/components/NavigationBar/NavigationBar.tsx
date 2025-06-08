import { Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import { Title } from "./Title/Title";
import { ContentBox, ContentBoxGray } from "./ContentBox/ContentBox";
import { useLocation, Link } from "react-router-dom";

export const NavigationBar = (): React.JSX.Element => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isCompetencesPage = location.pathname === "/competences";
  const isLesAvocatsPage = location.pathname === "/les-avocats";

  return (
    <>
      {isHomePage && <HomePageNavigationBar />}
      {(isCompetencesPage || isLesAvocatsPage) && <BackToHomePage />}
    </>
  );
};

const HomePageNavigationBar = (): React.JSX.Element => {
  return (
    <Navbar className={styles.Header}>
      <Title />
      <div className={styles.allContentBoxesContainer}>
        <Link to="/competences">
          <ContentBox title="Nos pôles de compétences" />
        </Link>
        <Link to="/les-avocats">
          <ContentBox title="Les avocats" />
        </Link>
        <ContentBoxGray title="Contact" />
      </div>
    </Navbar>
  );
};

const BackToHomePage = (): React.JSX.Element => {
  return (
    <Navbar className={styles.Header}>
      <Title />
      <div className={styles.allContentBoxesContainer}>
        <Link to="/">
          <ContentBox title="Retour à l'accueil" />
        </Link>
        <ContentBoxGray title="Contact" />
      </div>
    </Navbar>
  );
};
