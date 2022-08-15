import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import hoverEffect from "hover-effect";
// import blueEggo from "./blueEggo.png";
// import orangeEggo from "./orangeEggo.png";
import "./Bingbong.css";

function App() {
  // const img1 = blueEggo;
  // const img2 = orangeEggo;
  const container = useRef();

  useEffect(() => {
    console.log(container.current);
    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "https://thumbs.dreamstime.com/z/easter-eggs-18720466.jpg/400/600",
  
      image2: "https://thumbs.dreamstime.com/z/coming-soon-landing-page-design-coming-soon-page-new-website-launching-soon-%C3%A2%E2%82%AC-illustration-coming-soon-website-101906183.jpg/420/620",
      // img1: {img1},
      // img2: {img2},
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
    });
  }, [container]);

  return (
    <div className="App">
    <h1>My Eggo_____LEGGGGGGOOOOOO!!!!</h1>
      <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 400,
          height: 600
        }}
      />
    </div>
  );
}
 export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
