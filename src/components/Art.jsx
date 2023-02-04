import { useState } from "react";
import ArtGalleryYears from "./ArtGalleryYears";
import ArtGallery from "./ArtGallery";

export default function Art() {
  const [selectedCategory, setSelectedCategory] = useState("16");
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

  const ArtGalleryCategory = () => {
    const year = new Date().getFullYear();
    return (
      <main>
        <div id="art__search_and_gallery">
          {selectedCategory === "16" || selectedCategory === "314" ? (
            <>
              <h2>Latest {categoryObj[selectedCategory]}:</h2>
              <ArtGalleryYears
                previousYear={year}
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
  };

  return (
    <>
      <form id="ArtSearchBar">
        <select
          className="searchSelect"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="1">Drawing</option>
          <option value="2">Painting</option>
          <option value="3">Collage</option>
          <option value="4">Photography</option>
          <option value="5">Digital</option>
          <option value="6">Film</option>
          <option value="16">Visual Art</option>
          <option value="314">Everything</option>
        </select>
      </form>
      <ArtGalleryCategory />
    </>
  );
}
