import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card/ProductCard";
const InfinityList = (props) => {
  const perLoad = 6; // items each load

  const listRef = useRef(null);

  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          console.log("bottom reach");
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);
  return (
    <>
      {data.map((item, index) => (
        <div className="col l-3 m-4 c-6 pb-1-6" key={index} ref={listRef}>
          <ProductCard
            title={item.title}
            slug={item.slug}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            image={item.image}
            imgDetail1={item.imgDetail1}
            imgDetail2={item.imgDetail2}
            sale={item.sale}
            saleTag={item.saleTag}
            newTag={item.newTag}
            hotIcon={item.hotIcon}
            heartIcon={item.heartIcon}
          />
        </div>
      ))}
    </>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
