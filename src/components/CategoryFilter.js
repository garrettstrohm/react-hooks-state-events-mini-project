import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryFilter({ categories, handleSortByCategory }) {

  const categoryButtons = categories.map(category => <CategoryButton key={category} category={category} handleSortByCategory={handleSortByCategory}/>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
