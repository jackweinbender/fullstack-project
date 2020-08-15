import React, { Component } from "react";
import FavButton from "./FavButton";

export default class CatImage extends Component {
    clickFav = () => {
        console.log(this.props.fav);
        this.props.toggleFavorite(this.props.cat.id);
    };
    render() {
        const { cat } = this.props;
        return (
            <div className="p-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-2 rounded w-full center bg-gray-200 border border-gray-400">
                    <img
                        className="w-full mv-1 rounded border border-gray-700"
                        src={cat.url}
                        alt={cat.id}
                    />
                    <FavButton fav={this.props.fav} clickFav={this.clickFav} />
                </div>
            </div>
        );
    }
}
