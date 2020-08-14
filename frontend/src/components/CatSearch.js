import React, { Component, Fragment } from "react";
import axios from "axios";
import BreedFilter from "./BreedFilter";
import CategoryFilter from "./CategoryFilter";
import CatImage from "./CatImage";

import { cats } from "./data";

export default class CatSearch extends Component {
    state = {
        categories: [],
        breeds: [],
        baseUrl: "/api/cats",
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
    }

    setBreed(breed) {
        this.setState({ currentBreed: breed });
    }

    setCategory(category) {
        this.setState({ currentCategory: category });
    }

    updateUrl = () => {
        const base = "/api/cats";
    };

    render() {
        return (
            <Fragment>
                <p>URL: {this.state.url}</p>
                <div className="flex">
                    <BreedFilter breeds={this.state.breeds} />
                    <CategoryFilter categories={this.state.categories} />
                </div>
                <div>
                    {cats.map((cat) => (
                        <CatImage cat={cat} />
                    ))}
                </div>
            </Fragment>
        );
    }
}
