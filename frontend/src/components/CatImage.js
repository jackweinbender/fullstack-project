import React from "react";

export default function CatImage({ cat }) {
    return (
        <div>
            <img src={cat.url} alt={cat.id} />
        </div>
    );
}
