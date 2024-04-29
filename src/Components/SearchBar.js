import React, { useState } from "react";

// Define SearchOption component as a functional component
const SearchOption = ({ onSearch }) => {

     // Define state variable searchTerm and setSearchTerm using useState hook
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {

        // Update searchTerm state with the value of the input field
        setSearchTerm(event.target.value);

        // Call the onSearch callback function provided via props with the updated search term
        onSearch(event.target.value);
    };
        // Render SearchOption component
    return (
        <div className="SearchOption">
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
