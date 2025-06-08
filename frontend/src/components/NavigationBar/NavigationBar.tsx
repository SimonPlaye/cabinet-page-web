import { Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import { Title } from "./Title/Title";
import { ContentBox, ContentBoxGray } from "./ContentBox/ContentBox";
import { useLocation, Link } from "react-router-dom";

export const NavigationBar = (): React.JSX.Element => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isCompetencesPage = location.pathname === "/competences";

  return (
    <>
      {isHomePage && <HomePageNavigationBar />}
      {isCompetencesPage && <CompetencesNavigationBar />}
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
        <ContentBox title="Nos collaborateurs" />
        <ContentBoxGray title="Contact" />
      </div>
    </Navbar>
  );
};

const CompetencesNavigationBar = (): React.JSX.Element => {
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
