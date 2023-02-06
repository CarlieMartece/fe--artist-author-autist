import { useState } from "react";
import ArtGalleryYears from "./ArtGalleryYears";
import ArtGallery from "./ArtGallery";

export default function Art() {
  const [selectedCategory, setSelectedCategory] = useState("314");
  const categoryObj = {
    1: "Drawing",
    2: "Painting",
    3: "Collage",
    4: "Photography",
    5: "Digital",
    6: "Film",
    16: "Visual Art",
    314: "Creations",
  };
  const [selectedYear, setSelectedYear] = useState("314");
  const [yearChanged, setYearChanged] = useState(false);
  const years = [];
  for (let i = new Date().getFullYear(); i > 1998; i--) {
    years.push(i);
  }
  const [selectedColour, setSelectedColour] = useState("314");
  const [colourChanged, setColourChanged] = useState(false);
  const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "silver", "brown", "black", "white", "grey", "monochrome", "redblackwhite"]

  const categoryUpdate = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedYear("");
    setYearChanged(false);
    setSelectedColour("314");
    setColourChanged(false);
  }

  const yearUpdate = (e) => {
    setSelectedYear(e.target.value);
    setYearChanged(true);
    setSelectedCategory("314");
    setSelectedColour("314");
    setColourChanged(false);
  }

  const colourUpdate = (e) => {
    setSelectedColour(e.target.value);
    setColourChanged(true);
    setSelectedYear("314");
    setYearChanged(false);
    setSelectedCategory("314");
  }

  const ArtGalleryCategory = () => {
    if (!yearChanged || selectedYear === "314") {
      const newYear = new Date().getFullYear();
      if (!colourChanged || selectedColour === "314") {
        return (
          <main>
            <div id="art__search_and_gallery">
              {selectedCategory === "16" || selectedCategory === "314" ? (
                <>
                  <h2>Latest {categoryObj[selectedCategory]}:</h2>
                  <ArtGalleryYears
                    previousYear={newYear}
                    category={selectedCategory}
                  />
                </>
              ) : (
                <>
                  <h2>All {categoryObj[selectedCategory]}:</h2>
                  <ArtGallery category={selectedCategory} />
                </>
              )}
            </div>
          </main>
        );
      } else {
        return (
          <main>
            <div id="art__search_and_gallery">
              <>
                <h2>Everything's {selectedColour}:</h2>
                <ArtGallery selectedColour={selectedColour} />
              </>
            </div>
          </main>
        );
      }
    } else {
      return (
        <main>
          <div id="art__search_and_gallery">
            <>
              <h2>Everything {selectedYear}:</h2>
              <ArtGallery category={314} selectedYear={selectedYear} />
            </>
          </div>
        </main>
      );
    }
  };

  return (
    <>
      <form id="ArtSearchBar">
        <select
          className="searchSelect"
          value={selectedCategory}
          onChange={(e) => categoryUpdate(e)}
        >
          <option value="314">Everything</option>
          <option value="16">Visual Art</option>
          <option value="1">Drawing</option>
          <option value="2">Painting</option>
          <option value="3">Collage</option>
          <option value="4">Photography</option>
          <option value="5">Digital</option>
          <option value="6">Film</option>
        </select>
        <select
          className="searchSelect"
          value={selectedYear}
          onChange={(e) => yearUpdate(e)}
        >
          <option value="314">All Time</option>
          {years.map((year) => {
            return (
            <option value={year}>{year}</option>
            );
          })}
          
        </select>
        <select
          className="searchSelect"
          value={selectedColour}
          onChange={(e) => colourUpdate(e)}
        >
          <option value="314">Colours</option>
          {colours.map((colour) => {
            return (
            <option value={colour}>{colour}</option>
            );
          })}
          
        </select>
      </form>
      <ArtGalleryCategory />
    </>
  );
}
