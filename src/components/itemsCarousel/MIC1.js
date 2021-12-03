import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultiItemCard from "../../UI/MultiItemCard";
import ProductCard from "../../UI/ProductCard";
import { Link } from "react-router-dom";
import "./MIC1.css";

const MIC1 = (props) => {
  const [products, SetProducts] = useState([]);
  console.log(products, "products");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => SetProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const onShowProductDetails = (product) => {
    props.detailItemView(product);
  };

  var settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    // autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  const items = products.map((product) => {
    return (
      <div key={product.id} >
        <Link to={`/item/${product.id}`}>
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            // description={product.description}
            //  title={product.title}
          />
        </Link>
      </div>
    );
  });

  // console.log(products);
  return (
    <MultiItemCard>
      <Slider {...settings}>{items}</Slider>
    </MultiItemCard>
  );
};

export default MIC1;
