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
            <span className="flex-1">
                <select
                    className="w-full"
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
