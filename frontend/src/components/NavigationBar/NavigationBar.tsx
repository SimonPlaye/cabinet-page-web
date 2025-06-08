import styles from "./Header.module.css";

export const NavigationBar = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  return <header className={styles.stickyHeader}>{children}</header>;
};
