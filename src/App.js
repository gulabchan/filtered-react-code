import React, { useState } from "react";

const data = [
  { id: 1, name: "Gulab" },
  { id: 2, name: "Raj" },
  { id: 3, name: "vipul" },
  { id: 4, name: "Manoj" }
];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
