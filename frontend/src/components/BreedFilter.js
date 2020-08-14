import React, { Component } from "react";

export default class BreedFilter extends Component {
    setBreedEvent = (e) => {
        this.props.setBreed(e.target.value);
    };
    render() {
        const { breeds, currentBreed } = this.props;
        const options = breeds.map((breed) => {
            return (
                <option key={breed.id} value={breed.id}>
                    {breed.name}
                </option>
            );
        });
        return (
            <span className="flex-1">
                <select
                    className="w-full"
                    name="breeds"
                    id="breeds"
                    value={currentBreed}
                    onChange={this.setBreedEvent}
                >
                    <option value="">Select Breed</option>
                    {options}
                </select>
            </span>
        );
    }
}
