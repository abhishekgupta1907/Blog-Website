import React from "react";

const CategorySelection = ({
    onSelectCategory,
    selectedcategory,
    activeCategaory,
}) => {
    const categories = ["Startups", "Health", "AI", "Apps", "Tech"];
    return (
        <div className="px-4 mb-4 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
            <button
                onClick={() => onSelectCategory(null)}
                className={`lg:ml-12 ${activeCategaory ? "" : "active-button"}`}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    onClick={() => onSelectCategory(category)}
                    className={`mr-2 space-x-16 ${
                        activeCategaory === category ? "active-button" : ""
                    }`}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategorySelection;
