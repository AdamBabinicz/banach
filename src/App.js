import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/HomePage/HomePage";
import Signup from "./pages/SignupPage/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./globalStyles";
import CookieConsent from "react-cookie-consent";
import More from "./pages/HomePage/More/More";
import More1 from "./pages/HomePage/More/More1";
import More2 from "./pages/HomePage/More/More2";
import More3 from "./pages/HomePage/More/More3";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/marzyciele" exact component={Signup} />
        <Route path="/stefan-banach" exact component={More} />
        <Route path="/hugo-steinhaus" exact component={More1} />
        <Route path="/otto-nikodym" exact component={More2} />
        <Route path="/geniusz-matematyki" exact component={More3} />
      </Switch>
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "14px",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "16px",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </Router>
  );
}

export default App;
