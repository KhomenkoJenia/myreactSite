import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/variables.scss";
import CarouselBox from "./Components/CarouselBox";
import "./scss/fonts.scss";
import "./scss/templane.scss";
import "./scss/media/_media_max_width991.scss";
import CityAnimathion from "./Components/CityAnimathion";

function App() {
  return (
    <div>
      <Header />
      <CarouselBox />
      <CityAnimathion />
    </div>
  );
}

export default App;
