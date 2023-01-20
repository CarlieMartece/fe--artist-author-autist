const { greyObj, piToColour } = require("../utils.js");

export default function PiGrid() {

    console.log(piToColour(100, greyObj))

    return (
        <h2>Pi Grid</h2>
    )

}
