import React from "react";
import "../Styles/Paginado.css";

const Paginado = ({ pages, totalPages }) => {
  let arrPages = [];

  for (let i = 0; i <= totalPages; i++) {
    arrPages.push(i);
  }

  const scrollUp = () => {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 3);
    }
  };

  return (
    <div className="containter">
      {arrPages &&
        arrPages.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              pages(e + 1);
              scrollUp();
            }}
          >
            Page {e + 1}
          </button>
        ))}
    </div>
  );
};

export default Paginado;
