import React, { useContext, useState } from 'react';
import Header from './header';
import { ToolContext } from '../App';

const Card = ({ length }) => {
  
  const {
    filteredProducts,
    category,
    handleBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext);

  const [currentPage, setCurrentPage] = useState(1);
  
  const cardsPerPage = 20;

  // Calculate the index of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Get the current cards to be displayed
  const currentCards = filteredProducts
    .filter((product) => category === 'all' || category === product.category)
    .slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredProducts.length / cardsPerPage);

  // Function to handle the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Header />
      <div className="card-container">
        {length === 0 ? (
          <p className="no-results">
            Sorry, no tools available for this search term
          </p>
        ) : (
          <main className="grid">
            {currentCards.map((product, index) => (
              <article key={index}>
                <div className="text">
                  <h3>
                    <img className="card-img" src={product.image} alt="" />
                    <span className="card-title">{product.productName}</span>
                  </h3>
                  <p>{product.description}</p>
                  <div className="btn-cont">
                    <button>
                      <a target="_blank" href={product.link}>
                        Visit
                      </a>
                    </button>
                    {bookmarkfilteredProducts.some(
                      (obj) => obj['productName'] === product.productName
                    ) ? (
                      <button onClick={() => deleteres(product)}>
                        <a href="#">
                          Delete<i className="ri-bookmark-fill"></i>
                        </a>
                      </button>
                    ) : (
                      <button onClick={() => handleBookmarkAdd(product)}>
                        <a href="#">Bookmark</a>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </main>
        )}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="prev-btn"
              onClick={() => {
                prevPage();
                // window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="next-btn"
              onClick={() => {
                nextPage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
