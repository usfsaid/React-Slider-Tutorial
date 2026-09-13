import { motion } from "framer-motion";
import images from "./images";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [width, setWidte] = useState();
  const carouselRef = useRef();
  useEffect(() => {
    console.log(carouselRef.current.scrollWidth);
    console.log(carouselRef.current.offsetWidth);
    setWidte(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div
        className={"carousel"}
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={"inner-carousel"}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="carousel-img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
