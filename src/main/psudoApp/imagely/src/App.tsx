import Footer from "./component/organism/footer";

import Header from "./component/organism/header";
import MainContent from "./component/templates/main-content";

function App() {
  return (
    <div className="font-face bg-white">
      <Header />
      <MainContent></MainContent>
      <Footer />
    </div>
  );
}

export default App;