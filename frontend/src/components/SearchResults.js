import React, { Component } from "react";
import CatImage from "./CatImage";

export default class SearchResults extends Component {
    render() {
        const { results, favorites, toggleFavorite } = this.props;

        return (
            <div className="flex md:flex-row flex-wrap">
                {results.map((cat) => (
                    <CatImage
                        cat={cat}
                        key={cat.id}
                        fav={favorites.includes(cat.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        );
    }
}
