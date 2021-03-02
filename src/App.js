import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import { Desktop } from "./components/desktop/desktop.component";
import { Laptop } from "./components/laptop/laptop.component";
import { BigScreen } from "../src/components/big-screen/big-screen.component";
import { Mobile } from "../src/components/mobile/mobile.component";
import { TabletMobile } from "../src/components/tablet-mobile/tablet-mobile.component";

import "./App.css";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div className="App">
      <h1>React Responsive - a guide</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>}
    </div>
  );
}

export default App;