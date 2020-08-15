import React from "react";

export default function FavButton({ fav, clickFav }) {
    const handleClick = (e) => {
        e.preventDefault();
        clickFav();
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
