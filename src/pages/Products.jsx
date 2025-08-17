import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter, Search, Star } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Laptop",
          price: 1000,
          category: "Electronics",
          image: "https://via.placeholder.com/250x180?text=Laptop",
          discount: 10,
          rating: 4.5,
        },
        {
          id: 2,
          name: "Shoes",
          price: 50,
          category: "Fashion",
          image: "https://via.placeholder.com/250x180?text=Shoes",
          discount: 20,
          rating: 4,
        },
        {
          id: 3,
          name: "Phone",
          price: 700,
          category: "Electronics",
          image: "https://via.placeholder.com/250x180?text=Phone",
          discount: 15,
          rating: 5,
        },
        {
          id: 4,
          name: "Watch",
          price: 150,
          category: "Accessories",
          image: "https://via.placeholder.com/250x180?text=Watch",
          discount: 5,
          rating: 3.5,
        },
        {
          id: 5,
          name: "Headphones",
          price: 120,
          category: "Electronics",
          image: "https://via.placeholder.com/250x180?text=Headphones",
          discount: 25,
          rating: 4.2,
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.category === category : true))
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .sort((a, b) =>
      sort === "low-high"
        ? a.price - b.price
        : sort === "high-low"
        ? b.price - a.price
        : sort === "name-asc"
        ? a.name.localeCompare(b.name)
        : sort === "name-desc"
        ? b.name.localeCompare(a.name)
        : 0
    );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          fill={i <= Math.floor(rating) ? "#facc15" : "none"}
          stroke="#facc15"
        />
      );
    }
    return stars;
  };

  return (
    <div style={{ padding: "2rem", background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>
        Products
      </h1>

      {/* Filters */}
      <div
        style={{
          background: "#fff",
          padding: "1rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          marginBottom: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <Search style={{ marginRight: "0.5rem", color: "#6b7280" }} />
          <input
            type="text"
            placeholder="Search..."
            style={{ border: "none", outline: "none" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <Filter style={{ marginRight: "0.5rem", color: "#6b7280" }} />
          <select
            style={{ border: "none", outline: "none" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Price Range */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <label style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            Price Range
          </label>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              style={{
                width: "70px",
                border: "1px solid #d1d5db",
                borderRadius: "0.4rem",
                padding: "0.25rem 0.5rem",
              }}
            />
            <span>-</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{
                width: "70px",
                border: "1px solid #d1d5db",
                borderRadius: "0.4rem",
                padding: "0.25rem 0.5rem",
              }}
            />
          </div>
        </div>

        {/* Sort */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <span style={{ marginRight: "0.5rem", color: "#6b7280" }}>Sort:</span>
          <select
            style={{ border: "none", outline: "none" }}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.05)";
              }}
            >
              {/* Discount Badge */}
              {product.discount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#dc2626",
                    color: "#fff",
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  -{product.discount}%
                </span>
              )}

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              />

              {/* Name */}
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                {product.name}
              </h2>

              {/* Price */}
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                }}
              >
                ${product.price}
              </p>

              {/* Category */}
              <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                {product.category}
              </p>

              {/* Ratings */}
              <div style={{ display: "flex", gap: "2px", margin: "0.25rem 0" }}>
                {renderStars(product.rating)}
              </div>

              {/* Link */}
              <Link
                to={`/products/${product.id}`}
                style={{ color: "#2563eb", fontSize: "0.85rem" }}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.target.style.textDecoration = "none")
                }
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
