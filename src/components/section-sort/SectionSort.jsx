import React from "react";
import "./sectionsort.scss";

const SectionSort = () => {
  return (
    <></>
    // <div className="section__sort">
    //   <h2>Màu sắc</h2>
    //   <div className="section__sort__color">
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-xanh-navy">
    //         <input type="checkbox" id="filter-xanh-navy" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#03204C" }}
    //           ></i>
    //           <p className="section__sort__name">Xanh navy</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-den">
    //         <input type="checkbox" id="filter-den" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#000000" }}
    //           ></i>
    //           <p className="section__sort__name">Đen</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-xanh-la">
    //         <input type="checkbox" id="filter-xanh-la" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#62BF5E" }}
    //           ></i>
    //           <p className="section__sort__name">Xanh lá</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-nau">
    //         <input type="checkbox" id="filter-nau" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#613B0D" }}
    //           ></i>
    //           <p className="section__sort__name">Nâu</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-xam">
    //         <input type="checkbox" id="filter-xam" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#C1C5C0" }}
    //           ></i>
    //           <p className="section__sort__name">Xám</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-do">
    //         <input type="checkbox" id="filter-do" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#F10008" }}
    //           ></i>
    //           <p className="section__sort__name">Đỏ</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-xanh">
    //         <input type="checkbox" id="filter-xanh" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#6BBBDD" }}
    //           ></i>
    //           <p className="section__sort__name">Xanh</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-xanh-mint">
    //         <input type="checkbox" id="filter-xanh-mint" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#8CD6C4" }}
    //           ></i>
    //           <p className="section__sort__name">Xanh mint</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-trang">
    //         <input type="checkbox" id="filter-trang" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#FFFFFF" }}
    //           ></i>
    //           <p className="section__sort__name">Trắng</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-vang">
    //         <input type="checkbox" id="filter-vang" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#EFE159" }}
    //           ></i>
    //           <p className="section__sort__name">Vàng</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-hong">
    //         <input type="checkbox" id="filter-hong" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#DC85AC" }}
    //           ></i>
    //           <p className="section__sort__name">Hồng</p>
    //         </span>
    //       </label>
    //     </span>
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-cam">
    //         <input type="checkbox" id="filter-cam" />
    //         <span className="section__sort__content">
    //           <i
    //             className="fa fa-color"
    //             style={{ backgroundColor: "#F19F00" }}
    //           ></i>
    //           <p className="section__sort__name">Cam</p>
    //         </span>
    //       </label>
    //     </span>
    //   </div>
    //   <h2>Kích thước</h2>
    //   <div className="section__sort__size">
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-size-s">
    //         <input type="checkbox" id="filter-size-s" />
    //         <span className="section__sort__content">
    //           <p className="">S</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-size-m">
    //         <input type="checkbox" id="filter-size-m" />
    //         <span className="section__sort__content">
    //           <p className="">M</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-size-l">
    //         <input type="checkbox" id="filter-size-l" />
    //         <span className="section__sort__content">
    //           <p className="">L</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-size-xl">
    //         <input type="checkbox" id="filter-size-xl" />
    //         <span className="section__sort__content">
    //           <p className="">XL</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //     <span className="section__sort__wrap">
    //       <label htmlFor="filter-size-xxl">
    //         <input type="checkbox" id="filter-size-xxl" />
    //         <span className="section__sort__content">
    //           <p className="">XXL</p>
    //         </span>
    //       </label>
    //     </span>{" "}
    //   </div>
    // </div>
  );
};

export default SectionSort;
