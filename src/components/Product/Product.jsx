import React from 'react';
import "./Product.css"

const Product = ({ image, title, description, price }) => {
  return (
    <>
    <section className="productpage">
     <div className="products container py-5">
  <h1 className="text-center mb-4 fw-bold">Latest Products</h1>

  {/* Category Buttons */}
  <div className="buttons text-center mb-5">
    {['All', 'Rice', 'Wheat', 'Jaggery', 'Vegetables'].map((category, idx) => (
      <button
        key={idx}
        className="btn btn-outline-dark btn-sm mx-2 px-3 py-2 rounded-pill shadow-sm"
      >
        {category}
      </button>
    ))}
  </div>

  {/* Products Grid */}
  <div className="row g-4">
    {[...Array(1)].map((_, index) => (
      <div className="col-12 col-sm-6 col-md-4" key={index}>
        <div className="card h-100 border-0 shadow-sm hover-shadow rounded-4 overflow-hidden">
          <img
            src="/images/image8.png"
            className="card-img-top object-fit-cover"
            alt="Product"
            style={{ height: '220px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fw-semibold">Rice {index + 1}</h5>
            <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
              This is a product description. It provides information about the product.
            </p>
            <p className="card-text">
              <small className="text-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
    </>
  );
};

export default Product;
