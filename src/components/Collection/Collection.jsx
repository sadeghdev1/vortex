import React, { useState, useEffect } from "react";
import styles from "./Collection.module.scss";
import bmw from "../../assets/images/bmwm4.jpg";
import ford from "../../assets/images/mustang.jpg";
import mazda from "../../assets/images/mazda.jpg";
import lambo from "../../assets/images/lambo.png";
import Rarrow from "../../assets/images/right-arrow.png";
import Larrow from "../../assets/images/left-arrow.png";
import "boxicons";

const cars = [
  { id: 1, img: bmw, name: "BMW M4", year: "2018-2019", price: "8,000,000,000" },
  { id: 2, img: ford, name: "Ford Mustang", year: "2020", price: "8,500,000,000" },
  { id: 3, img: mazda, name: "Mazda-RX-7", year: "2001", price: "7,500,000,000" },
  { id: 4, img: lambo, name: "Lambo Revuelto", year: "2021", price: "10,500,000,000" },
];

export default function Collection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600 && window.innerWidth <= 920) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev - 1 + cars.length) % cars.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % cars.length);

  const getVisibleCars = () => {
    return Array.from({ length: cardsPerView }, (_, i) => cars[(index + i) % cars.length]);
  };

  return (
    <section id="collection" className={styles.collection}>
      <div className={styles.wrapper}>
        <button className={styles.rarrow} onClick={prevSlide}>
          <img src={Rarrow} alt="right arrow" />
        </button>

        <div className={styles.slider}>
          {getVisibleCars().map((car) => (
            <div key={car.id} className={styles.card}>
              <img src={car.img} alt={car.name} className={styles.carImage} />
              <h3 className={styles.name}>{car.name}</h3>

              <div className={styles.row}>
                <span>سال ساخت:</span>
                <span>({car.year})</span>
              </div>

              <div className={styles.row}>
                <span>قیمت:</span>
                <span>{car.price}</span>
              </div>

              <button className={styles.orderBtn}>ثبت سفارش</button>
              <button className={styles.detailsBtn}>مشخصات خودرو</button>
            </div>
          ))}
        </div>

        <button className={styles.larrow} onClick={nextSlide}>
          <img src={Larrow} alt="left arrow" />
        </button>
      </div>
    </section>
  );
}