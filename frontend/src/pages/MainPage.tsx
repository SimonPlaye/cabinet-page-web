import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Competences } from "./Competences";

export const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/competences" element={<Competences />} />
      </Routes>
    </div>
  );
};
