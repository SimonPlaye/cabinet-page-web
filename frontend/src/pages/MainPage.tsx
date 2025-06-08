import { Header } from "components/Header/Header";
import { Title } from "components/Header/Title/Title";
import { Routes, Route } from "react-router-dom";

export const MainPage = () => {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Title />} />
      </Routes>
    </Header>
  );
};
