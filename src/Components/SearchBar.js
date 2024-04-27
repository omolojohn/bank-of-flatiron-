import React, { useState } from "react";

const SearchOption = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search your Recent Transaction"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchOption;
