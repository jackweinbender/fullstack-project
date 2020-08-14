import React from "react";

export default function CategoryFilter({ categories }) {
    const options = categories.map((category) => {
        return <option key={category}>{category}</option>;
    });
    return (
        <span className="flex-1">
            <label htmlFor="categories">
                Select Categories:
                <select className="w-full" name="categories" id="categories">
                    {options}
                </select>
            </label>
        </span>
    );
}
