import React from "react";
import { useState, useEffect } from "react";
// mounts - fetching data cars []  ---data --> cars[data]
// when sth changes
const url = "https://example-data.draftbit.com/cars?_limit=15";
const Products = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCars = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setIsLoading(false);
    setCars(data);
  };
  useEffect(() => {
    getCars();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h1>List of Cars</h1>
      {cars.map((car) => {
        return (
          <div key={car.id}>
            <img src={car.image} alt="" />
            <h2>{car.model}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
