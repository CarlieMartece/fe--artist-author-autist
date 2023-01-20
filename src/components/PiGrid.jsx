//import { useEffect, useState } from "react";
import { greyObj, piToColour } from "../utils";

export default function PiGrid() {
    // const [piArray, setPiArray] = useState([]);
    // useEffect(() => {
    //     piToColour(10000, greyObj).then((piPairs) => {
    //         setPiArray(piPairs);
    //     })
    // }, []);
    
    const piArray = piToColour(10000, greyObj)
    

  return (
    <main>
      <div id="PiGrid">
        {piArray.map((piPair) => {
          return (
            <div
              className="piSquare"
              key={piPair[0]}
              style={{
                backgroundColor: `${piPair[1]}`,
              }}
            ></div>
          );
        })}
      </div>
    </main>
  );
}
