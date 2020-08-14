import React from "react";

export default function BreedFilter({ breeds }) {
    const options = breeds.map((breed) => {
        return <option key={breed}>{breed}</option>;
    });
    return (
        <span className="flex-1">
            <label htmlFor="breeds">
                Select Breed:
                <select className="w-full" name="breeds" id="breeds">
                    {options}
                </select>
            </label>
        </span>
    );
}
