import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99,
        background: "linear-gradient(90deg, #EF8431 0%, #E71A86 100%)",
        color: "#fff",
        border: "none",
        borderRadius:"50%",
        height: "50px",
        width: "50px",
        cursor: "pointer",
      }}
    >
      <i className="fs-5 fa fa-angle-up text-white"/>
    </button>
  );
}

export default ScrollToTopButton;
