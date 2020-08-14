import React from "react";

export default function CatImage({ cat }) {
    return (
        <div className="w-full md:w-1/2 lg:w1/3">
            <img src={cat.url} alt={cat.id} />
        </div>
    );
}
