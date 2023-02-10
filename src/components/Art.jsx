import { useState } from "react";
import ArtGalleryYears from "./ArtGalleryYears";
import ArtGallery from "./ArtGallery";

export default function Art() {
  const [selectedCategory, setSelectedCategory] = useState("314");
  const categories = [
    [1, "Drawing"],
    [2, "Painting"],
    [3, "Collage"],
    [4, "Photography"],
    [5, "Digital"],
    [6, "Film"],
    [16, "Visual Art"],
    [314, "Creations"],
  ];

  const [selectedYear, setSelectedYear] = useState("314");
  const [yearChanged, setYearChanged] = useState(false);
  const years = [];
  for (let i = new Date().getFullYear(); i > 1998; i--) {
    years.push(i);
  }

  const [selectedColour, setSelectedColour] = useState("314");
  const [colourChanged, setColourChanged] = useState(false);
  const colours = [
    "Black",
    "Blue",
    "Brown",
    "Cream",
    "Green",
    "Grey",
    "Orange",
    "Peach",
    "Pink",
    "Purple",
    "Rainbow",
    "Red",
    "Redblackwhite",
    "White",
    "Yellow",
  ];

  const categoryUpdate = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedYear("");
    setYearChanged(false);
    setSelectedColour("314");
    setColourChanged(false);
  };

  const yearUpdate = (e) => {
    setSelectedYear(e.target.value);
    setYearChanged(true);
    setSelectedCategory("314");
    setSelectedColour("314");
    setColourChanged(false);
  };

  const colourUpdate = (e) => {
    setSelectedColour(e.target.value);
    setColourChanged(true);
    setSelectedYear("314");
    setYearChanged(false);
    setSelectedCategory("314");
  };

  const ArtGalleryCategory = () => {
    if (!yearChanged || selectedYear === "314") {
      const newYear = new Date().getFullYear();
      if (!colourChanged || selectedColour === "314") {
        return (
          <div className="art__gallery">
            {selectedCategory === "16" || selectedCategory === "314" ? (
              <ArtGalleryYears
                previousYear={newYear}
                category={selectedCategory}
              />
            ) : (
              <ArtGallery category={selectedCategory} />
            )}
          </div>
        );
      } else {
        return (
          <div className="art__gallery">
            <ArtGallery selectedColour={selectedColour.toLowerCase()} />
          </div>
        );
      }
    } else {
      return (
        <div className="art__gallery">
          <ArtGallery category={314} selectedYear={selectedYear} />
        </div>
      );
    }
  };

  return (
    <main>
      <div id="Art">
        <form id="ArtSearchBar">
          <select
            className="searchSelect"
            value={selectedCategory}
            onChange={(e) => categoryUpdate(e)}
          >
            <option key="314" value="314">
              Everything
            </option>
            {categories.map((category) => {
              return (
                <option key={category[0]} value={category[0]}>
                  {category[1]}
                </option>
              );
            })}
          </select>
          <select
            className="searchSelect"
            value={selectedYear}
            onChange={(e) => yearUpdate(e)}
          >
            <option key="314" value="314">
              Everywhen
            </option>
            {years.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <select
            className="searchSelect"
            value={selectedColour}
            onChange={(e) => colourUpdate(e)}
          >
            <option key="314" value="314">
              Colours
            </option>
            {colours.map((colour) => {
              return (
                <option key={colour} value={colour}>
                  {colour}
                </option>
              );
            })}
          </select>
        </form>
        <ArtGalleryCategory />
      </div>
    </main>
  );
}
