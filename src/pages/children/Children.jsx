import React, { useState, useCallback, useEffect } from "react";
import productData from "../../assets/fake-data/productchildren";
import colors from "../../assets/fake-data/product-color";
import size from "../../assets/fake-data/product-size";
import Helmet from "../../components/Helmet";
import CheckBox from "../../components/checkbox/CheckBox";
import InfinityListChildren from "../../components/InfinityListChildren";

const Children = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const initFilter = {
    color: [],
    size: [],
  };

  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
          throw new Error("no match");
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productData.getAllProductsChildren();
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <Helmet title="Quần áo trẻ em, Thời trang cho bé cao cấp">
      <div className="product body-bg">
        <div className="container">
          <h1>THỜI TRANG TRẺ EM</h1>
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="col l-3 m-12 c-12">
                <div className="section__sort">
                  <h2>Màu sắc</h2>
                  <div className="section__sort__color">
                    {colors.map((item, index) => (
                      <label htmlFor={item.color} key={index}>
                        <span className="section__sort__wrap">
                          <CheckBox
                            type="checkbox"
                            id={item.color}
                            onChange={(input) =>
                              filterSelect("COLOR", input.checked, item)
                            }
                            checked={filter.color.includes(item.color)}
                          />
                          <span className="section__sort__content">
                            <i className={`fa fa-color bg-${item.color}`}></i>
                            <p className="section__sort__name">
                              {item.display}
                            </p>
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                  <h2>Kích thước</h2>
                  <div className="section__sort__size">
                    {size.map((item, index) => (
                      <label htmlFor={item.size} key={index}>
                        <span className="section__sort__wrap">
                          <CheckBox
                            type="checkbox"
                            id={item.size}
                            onChange={(input) =>
                              filterSelect("SIZE", input.checked, item)
                            }
                            checked={filter.size.includes(item.size)}
                          />
                          <span className="section__sort__content">
                            <p className="">{item.display}</p>
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col l-9 m-12 c-12 ">
                <div className="row sm-gutter">
                  <InfinityListChildren data={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Children;
