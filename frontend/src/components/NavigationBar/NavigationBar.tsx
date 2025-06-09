import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import { Title } from "./Title/Title";
import { ContentBox, ContentBoxGray } from "./ContentBox/ContentBox";
import { useLocation, Link } from "react-router-dom";

export const NavigationBar = (): React.JSX.Element => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <HomePageNavigationBar /> : <BackToHomePageNavigationBar />}
    </>
  );
};

const HomePageNavigationBar = (): React.JSX.Element => {
  return (
    <Navbar expand="md" className={styles.Header}>
      <Container fluid>
        <HomePageMobileVersion />
        <HomePageComputerVersion />
      </Container>
    </Navbar>
  );
};

const HomePageMobileVersion = (): React.JSX.Element => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileHeaderBar}>
        <Title />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/honoraires">
            Nos honoraires
          </Nav.Link>
          <Nav.Link as={Link} to="/competences">
            Nos pôles de compétences
          </Nav.Link>
          <Nav.Link as={Link} to="/les-avocats">
            Les avocats
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};

const HomePageComputerVersion = (): React.JSX.Element => {
  return (
    <div className={styles.desktopNav}>
      <Title />
      <div className={styles.allContentBoxesContainer}>
        <Link to="/honoraires">
          <ContentBox title="Nos honoraires" />
        </Link>
        <Link to="/competences">
          <ContentBox title="Nos pôles de compétences" />
        </Link>
        <Link to="/les-avocats">
          <ContentBox title="Les avocats" />
        </Link>
        <Link to="/contact">
          <ContentBoxGray title="Contact" />
        </Link>
      </div>
    </div>
  );
};

const BackToHomePageNavigationBar = (): React.JSX.Element => {
  return (
    <Navbar expand="md" className={styles.Header}>
      <Container fluid>
        <BackToHomePageMobileVersion />
        <BackToHomePageComputerVersion />
      </Container>
    </Navbar>
  );
};

const BackToHomePageMobileVersion = (): React.JSX.Element => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileHeaderBar}>
        <Title />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Accueil
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};

const BackToHomePageComputerVersion = (): React.JSX.Element => {
  return (
    <div className={styles.desktopNav}>
      <Title />
      <div className={styles.allContentBoxesContainer}>
        <Link to="/">
          <ContentBox title="Retour à l'accueil" />
        </Link>
        <Link to="/contact">
          <ContentBoxGray title="Contact" />
        </Link>
      </div>
    </div>
  );
};
