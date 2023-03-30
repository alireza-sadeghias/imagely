import { Route, Routes } from "react-router-dom";
import MainContent from "./component/organism/main-content";
import Card from "./component/organism/card";
import History from "./component/organism/content-info/history";
import NotFound from "./component/organism/not-found";
import Repository from "./component/organism/repository";
import ViewTemplate from "./component/templates/home";
import AboutUs from "./component/organism/about-us";
import LogIn from "./component/pages/login";

function App() {
  return (
    <Routes>
      <Route element={<ViewTemplate />}>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/history" element={<History />} />
        <Route path="/card" element={<Card />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/gallery" element={<MainContent />} />
        <Route path="/gallery" element={<MainContent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search/:query" element={<MainContent />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
