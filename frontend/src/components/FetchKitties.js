import React from "react";

export default function FetchKitties({ updateCats }) {
    return (
        <div className="flex-2 px-1">
            <button
                className="w-full mx-2 px-2 py-1 bg-purple-600 rounded text-white font-bold"
                onClick={updateCats}
            >
                Fetch Kitties
            </button>
        </div>
    );
}
