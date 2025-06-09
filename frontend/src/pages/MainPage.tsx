import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Competences } from "./Competences/Competences";
import { HomePage } from "./HomePage";
import { Footer } from "components/Footer/Footer";
import { LesAvocats } from "./LesAvocats";
import { DroitDeLaFamille } from "./Competences/DroitDeLaFamille";
import { DroitDesMineurs } from "./Competences/DroitDesMineurs";
import { DroitPenal } from "./Competences/DroitPenal";
import { NousContacter } from "components/HomePage/NousContacter/NousContacter";

export const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="les-avocats" element={<LesAvocats />} />
        <Route
          path="/competences/droit-de-la-famille"
          element={<DroitDeLaFamille />}
        />
        <Route
          path="/competences/droit-des-mineurs"
          element={<DroitDesMineurs />}
        />
        <Route path="/competences/droit-penal" element={<DroitPenal />} />
        <Route path="/contact" element={<NousContacter />} />
      </Routes>
      <Footer />
    </div>
  );
};
