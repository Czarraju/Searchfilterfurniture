import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",
    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",
    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];
function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (category = "") => {
    const term = searchTerm.toLowerCase();
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter(
        (product) => product.company.toLowerCase() === category,
      );
    } else if (term) {
      filtered = filtered.filter((product) => {
        const searchText = term.toLowerCase();
        const productText = Object.values(product).join(" ").toLowerCase();
        return productText.includes(searchText);
      });
    }

    setFilteredProducts(filtered);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    filterProducts();
  };

  const handleCategoryFilter = (companyName) => {
    filterProducts(companyName);
  };

  return (
    <div className="container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearchTermChange}
          value={searchTerm}
          className="form-control"
        />
        <button onClick={() => filterProducts()} className="btn">
          All Companies
        </button>
        {allProducts.length > 0 ? (
          Array.from(
            new Set(allProducts.map((product) => product.company)),
          ).map((company) => (
            <button
              key={company}
              onClick={() => handleCategoryFilter(company)}
              className="btn"
            >
              {company}
            </button>
          ))
        ) : (
          <p>Products are loading...</p>
        )}
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Company: {product.company}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
