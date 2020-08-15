import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import CatNav from "./CatNav";

export default class CatSearch extends Component {
    state = {
        categories: [],
        breeds: [],
        currentBreed: "",
        currentCategory: "",
        url: "",
        results: [],
        favorites: [],
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "/api/breeds",
            responseType: "json",
        }).then(({ data }) => {
            this.setState({ breeds: data });
        });

        axios({
            method: "get",
            url: "/api/categories",
            responseType: "json",
        }).then(({ data }) => {
            this.setState({ categories: data });
        });
        axios({
            method: "get",
            url: "/api/cats",
            responseType: "json",
        }).then(({ data }) => {
            this.setState({ results: data });
        });
        axios({
            method: "get",
            url: "/api/favorites",
            responseType: "json",
        }).then(({ data }) => {
            this.setState({ favorites: data });
        });
    }
    toggleFavorite = (id) => {
        if (this.state.favorites.includes(id)) {
            console.log("UNFave!");
            this.unfavorite(id);
        } else {
            console.log("Fave!");
            this.favorite(id);
        }
    };
    favorite = (id) => {
        axios({
            method: "post",
            url: "/api/favorites",
            responseType: "json",
            params: { id: id },
        }).then(({ data }) => {
            this.setState({ favorites: data });
        });
    };
    unfavorite = (id) => {
        axios({
            method: "delete",
            url: `/api/favorites/${id}`,
            responseType: "json",
        }).then(({ data }) => {
            this.setState({ favorites: data });
        });
    };
    setBreed = (breed) => {
        this.setState({ currentBreed: breed });
    };

    setCategory = (category) => {
        this.setState({ currentCategory: category });
    };
    updateCats = () => {
        const { currentBreed, currentCategory } = this.state;
        const params = {};

        if (currentBreed) {
            params.breed = currentBreed;
        }
        if (currentCategory) {
            params.category = currentCategory;
        }
        console.log({ params, currentBreed, currentCategory });
        axios({
            method: "get",
            url: "/api/cats",
            responseType: "json",
            params: params,
        }).then(({ data }) => {
            this.setState({ results: data });
        });
    };
    render() {
        const { results, favorites } = this.state;
        return (
            <Fragment>
                <h1 className="p-4 text-lg text-center text-white bg-blue-700 text-bold">
                    🐈{" "}
                    <span
                        style={{
                            fontFamily: [
                                "Comic Sans MS",
                                "cursive",
                                "sans-serif",
                            ],
                        }}
                    >
                        The Cat Filter
                    </span>{" "}
                    🐱
                </h1>
                <CatNav
                    setBreed={this.setBreed}
                    setCategory={this.setCategory}
                    updateCats={this.updateCats}
                    {...this.state}
                />
                <SearchResults
                    results={results}
                    favorites={favorites}
                    toggleFavorite={this.toggleFavorite}
                />
            </Fragment>
        );
    }
}
