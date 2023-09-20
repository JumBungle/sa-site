import { useEffect, useState } from "react";

function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-top-button ${showButton ? "" : "hide-scroll-button"}`}
      onClick={handleToTop}
    >
      <i className="fa-solid fa-arrow-up scroll-top-icon"></i>
    </div>
  );
}

export default ScrollTopButton;
