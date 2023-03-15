import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/variables.scss";
import CarouselBox from "./Components/CarouselBox";
import "./scss/fonts.scss";
import "./scss/templane.scss";
import "./scss/media/_media_max_width991.scss";
import CityAnimathion from "./Components/CityAnimathion";
import Button from "react-bootstrap/Button";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Header />
      <CarouselBox />
      <CityAnimathion />
      {open && <div>Hello</div>}
      <Button
        className="btn"
        onClick={() => setOpen(true)}
        type="select"
        variant="btn"
      >
        відправити заявку
      </Button>
    </div>
  );
}

export default App;
