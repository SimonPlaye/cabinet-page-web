import React from "react";
import styles from "./ContentBox.module.css";
import { Button } from "react-bootstrap";

export const ContentBox = ({ title }: { title: string }): React.JSX.Element => {
  return <Button className={styles.ContentBox}>{title}</Button>;
};

export const ContentBoxGray = ({
  title,
}: {
  title: string;
}): React.JSX.Element => {
  return <Button className={styles.ContentBoxGray}>{title}</Button>;
};
