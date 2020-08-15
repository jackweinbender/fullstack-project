import React from "react";
import BreedFilter from "./BreedFilter";
import CategoryFilter from "./CategoryFilter";
import FetchKitties from "./FetchKitties";

export default function CatNav(props) {
    const {
        breeds,
        currentBreed,
        categories,
        currentCategory,
        setBreed,
        setCategory,
        updateCats,
    } = props;
    return (
        <nav className="flex items-center p-2 border border-gray-500 bg-gray-300 text-lg">
            <BreedFilter
                breeds={breeds}
                currentBreed={currentBreed}
                setBreed={setBreed}
            />
            <CategoryFilter
                categories={categories}
                currentCategory={currentCategory}
                setCategory={setCategory}
            />
            <FetchKitties updateCats={updateCats} />
        </nav>
    );
}
