import React, { Component } from "react";

export default class CategoryFilter extends Component {
    setCategoryEvent = (e) => {
        this.props.setCategory(e.target.value);
    };
    render() {
        const { categories, currentCategory } = this.props;
        const options = categories.map((category) => {
            return (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            );
        });
        return (
            <span className="flex-1 flex- px-1">
                <select
                    className="w-full rounded border border-gray-400 mx-2 px-2 py-1"
                    name="categories"
                    id="categories"
                    value={currentCategory}
                    onChange={this.setCategoryEvent}
                >
                    <option value="">Select a Cat-egory</option>
                    {options}
                </select>
            </span>
        );
    }
}
