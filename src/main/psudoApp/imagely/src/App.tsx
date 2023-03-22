import { useState } from "react";
import WordCloud from "./component/moleculs/word-cloud";
import Footer from "./component/organism/footer";

import Header from "./component/organism/header";
import MainContent from "./component/templates/main-content";

function App() {
  return (
    <>
      {/* <Header />
      <MainContent></MainContent>
      <Footer /> */}
      <WordCloud />
    </>
  );
}

export default App;
