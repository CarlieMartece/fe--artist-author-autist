import { useState } from "react";

export default function ArtSearchBar() {
    const [selectedCategory, setSelectedCategory] = useState('visualOnly');
  
    return (
    <form id="ArtSearchBar">
      <select 
        className="searchSelect"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="visualArt">Visual Art</option>
        <option value="everything">Everything</option>
      </select>
    </form>
  );
}
