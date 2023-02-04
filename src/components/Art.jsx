import { useState } from "react";
import ArtGalleryYears from "./ArtGalleryYears";

export default function Art() {
  const [selectedCategory, setSelectedCategory] = useState("16");
  const categoryObj = {
    "16": "Visual Art",
    "314": "Creations"
  };

  const ArtGalleryCategory = () => {
    const year = new Date().getFullYear();
    console.log(year);
    console.log(selectedCategory);
    return (
      <main>
        <div id="art__search_and_gallery">
          <h2>Latest {categoryObj[selectedCategory]}:</h2>
          <ArtGalleryYears previousYear={year} category={selectedCategory} />
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
          <option value="16">Visual Art</option>
          <option value="314">Everything</option>
        </select>
      </form>
      <ArtGalleryCategory />
    </>
  );
}
