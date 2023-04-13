import About from "./components/About/About";
import Buttons from "./components/Buttons/Buttons";
import Footer from "./components/Footer/Footer";
import Interests from "./components/Interests/Interests";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Buttons/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
