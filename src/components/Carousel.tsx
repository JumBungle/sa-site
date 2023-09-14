import { useRef, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const images = ["Brennan-hero.jpg", "Kiernander-hero.jpg", "Oaia-hero.jpg"];

function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const [ticking, setTicking] = useState(true);

  const carouselCards = images.map((image, index) => (
    <div
      className="carousel-card"
      style={{ backgroundImage: `url(/images/${image})` }}
      draggable="false"
      key={index}
    />
  ));

  const onClickRight = () => {
    if (carousel.current != null) {
      carousel.current.scrollLeft = carousel.current.scrollLeft + width;
    }
  };

  const onClickLeft = () => {
    if (carousel.current != null) {
      carousel.current.scrollLeft = carousel.current.scrollLeft - width;
    }
  };

  useEffect(() => {
    let intervalId: number;

    if (ticking) {
      intervalId = setInterval(() => {
        if (carousel.current) {
          carousel.current.scrollLeft = carousel.current.scrollLeft + width;
        }
      }, 3500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [ticking]);

  useEffect(() => {
    if (carousel.current) {
      let isDragging = false,
        startX: number,
        startScrollLeft: number;

      const dragStart = (e: MouseEvent) => {
        if (carousel.current != null) {
          isDragging = true;
          carousel.current.classList.add("dragging");
          startX = e.pageX;
          startScrollLeft = carousel.current.scrollLeft;
        }
      };

      const dragStop = () => {
        isDragging = false;
        carousel.current?.classList.remove("dragging");
      };

      const dragging = (e: MouseEvent) => {
        if (!isDragging) return;
        if (carousel.current != null) {
          carousel.current.scrollLeft = startScrollLeft - (e.pageX - startX);
        }
      };

      const infiniteScroll = () => {
        if (carousel.current != null) {
          if (carousel.current.scrollLeft === 0) {
            carousel.current.classList.add("carousel-no-transition");
            carousel.current.scrollLeft =
              carousel.current.scrollWidth - 2 * carousel.current.offsetWidth;
            carousel.current.classList.remove("carousel-no-transition");
          } else if (
            Math.ceil(carousel.current.scrollLeft) ===
            carousel.current.scrollWidth - carousel.current.offsetWidth
          ) {
            carousel.current.classList.add("carousel-no-transition");
            carousel.current.scrollLeft = carousel.current.offsetWidth;
            carousel.current.classList.remove("carousel-no-transition");
          }
        }
      };

      carousel.current.addEventListener("mousedown", dragStart);
      document.addEventListener("mouseup", dragStop);
      carousel.current.addEventListener("mousemove", dragging);
      carousel.current.addEventListener("scroll", infiniteScroll);
    }
  }, [carousel]);

  useEffect(() => {
    if (carousel.current != null) {
      const firstCard = carousel.current.children[0];
      const lastCard =
        carousel.current.children[carousel.current.children.length - 1];

      carousel.current.insertAdjacentHTML("beforeend", firstCard.outerHTML);

      carousel.current.insertAdjacentHTML("afterbegin", lastCard.outerHTML);

      carousel.current.classList.add("carousel-no-transition");
      carousel.current.scrollLeft = width;
      carousel.current.classList.remove("carousel-no-transition");
    }
  }, []);

  return (
    <div
      onMouseEnter={() => setTicking(false)}
      onMouseLeave={() => setTicking(true)}
      className="carousel-wrapper"
    >
      <i onClick={onClickLeft} className="fa-solid fa-angle-left"></i>
      <div ref={carousel} className="carousel">
        {carouselCards}
      </div>
      <i onClick={onClickRight} className="fa-solid fa-angle-right"></i>
    </div>
  );
}

export default Carousel;
