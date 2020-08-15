import React, { Component, Fragment } from "react";
import axios from "axios";
import BreedFilter from "./BreedFilter";
import CategoryFilter from "./CategoryFilter";
import CatImage from "./CatImage";

export default class CatSearch extends Component {
    state = {
        categories: [],
        breeds: [],
        currentBreed: "",
        currentCategory: "",
        url: "",
        results: [],
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
    }

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
        return (
            <Fragment>
                <nav className="flex">
                    <BreedFilter
                        breeds={this.state.breeds}
                        currentBreed={this.state.currentBreed}
                        setBreed={this.setBreed}
                    />
                    <CategoryFilter
                        categories={this.state.categories}
                        currentCategory={this.state.currentCategory}
                        setCategory={this.setCategory}
                    />
                    <button onClick={this.updateCats}>Fetch Kitty</button>
                </nav>
                <div className="flex md:flex-row flex-wrap">
                    {this.state.results.map((cat) => (
                        <CatImage cat={cat} key={cat.id} />
                    ))}
                </div>
            </Fragment>
        );
    }
}
