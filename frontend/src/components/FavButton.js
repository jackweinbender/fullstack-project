import React from "react";

export default function FavButton({ fav, toggleFav }) {
    const handleClick = (e) => {
        e.preventDefault();
        toggleFav(fav);
    };

    const isFavorite = (
        <button
            className="w-full my-1 border border-blue-900 bg-blue-700 text-white"
            onClick={handleClick}
        >
            {"Un-favorite"}
        </button>
    );
    const notFavorite = (
        <button
            className="w-full my-1 border border-gray-700 "
            onClick={handleClick}
        >
            {"Favorite"}
        </button>
    );

    return fav ? isFavorite : notFavorite;
}
