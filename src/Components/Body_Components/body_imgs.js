import React, { useEffect, useState } from "react";
import img_product_1 from "../../images/image-product-1.jpg";
import img_product_2 from "../../images/image-product-2.jpg";
import img_product_3 from "../../images/image-product-3.jpg";
import img_product_4 from "../../images/image-product-4.jpg";

import img_thumbnail_1 from "../../images/image-product-1-thumbnail.jpg";
import img_thumbnail_2 from "../../images/image-product-2-thumbnail.jpg";
import img_thumbnail_3 from "../../images/image-product-3-thumbnail.jpg";
import img_thumbnail_4 from "../../images/image-product-4-thumbnail.jpg";

import close_icon from "../../images/icon-close.svg";
import next_btn from "../../images/icon-next.svg";
import prev_btn from "../../images/icon-previous.svg";

import "./Body_Componetens.css";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export default function BodyImgs() {
  const [Check, SetCheck] = useState(false);

  let [counter, setCounter] = useState(0);

  const All_img_product = [
    img_product_1,
    img_product_2,
    img_product_3,
    img_product_4,
  ];

  const All_thumbnails = [
    img_thumbnail_1,
    img_thumbnail_2,
    img_thumbnail_3,
    img_thumbnail_4,
  ];

  function open_windo() {
    let width = getWindowDimensions();
    if (width > 500) {
      SetCheck(true);
    }
  }

  function close_windo() {
    SetCheck(false);
  }

  function next_img() {
    if (counter === 3) {
      setCounter(0);
    } else {
      setCounter(++counter);
    }
  }

  function prev_img() {
    if (counter === 0) {
      setCounter(3);
    } else {
      setCounter(--counter);
    }
  }

  function Change_img(e) {
    setCounter(+e.target.getAttribute("number"))
  }

  return (
    <div className="body_Img">
        {Check ? <div className="See_All_Imgs">
        <div className="product_widno">
          <img
            onClick={close_windo}
            className="close_icon"
            src={close_icon}
            alt="close"
          />
          <img
            className="Produect_windo_img"
            src={All_img_product[counter]}
            alt="img"
          />
          <div onClick={next_img} className="next_btn">
            <img src={next_btn} alt="next" />
          </div>
          <div onClick={prev_img} className="prev_btn">
            <img src={prev_btn} alt="next" />
          </div>
        </div>

        <div className="thumbnails_img_windo">
          <div
            style={
              counter === 0
                ? { outline: "2px solid rgb(255 120 5)" }
                : { outline: "none" }
            }
            className="img_box"
          >
            <img
              onClick={Change_img}
              number="0"
              src={All_thumbnails[0]}
              style={counter === 0 ? { opacity: 0.3 } : { opacity: 1 }}
              alt="img"
            />
          </div>

          <div
            style={
              counter === 1
                ? { outline: "2px solid rgb(255 120 5)" }
                : { outline: "none" }
            }
            className="img_box"
          >
            <img
              onClick={Change_img}
              number="1"
              src={All_thumbnails[1]}
              style={counter === 1 ? { opacity: 0.3 } : { opacity: 1 }}
              alt="img"
            />
          </div>

          <div
            style={
              counter === 2
                ? { outline: "2px solid rgb(255 120 5)" }
                : { outline: "none" }
            }
            className="img_box"
          >
            <img
              onClick={Change_img}
              number="2"
              src={All_thumbnails[2]}
              style={counter === 2 ? { opacity: 0.3 } : { opacity: 1 }}
              alt="img"
            />
          </div>

          <div
            style={
              counter === 3
                ? { outline: "2px solid rgb(255 120 5)" }
                : { outline: "none" }
            }
            className="img_box"
          >
            <img
              onClick={Change_img}
              number="3"
              src={All_thumbnails[3]}
              style={counter === 3 ? { opacity: 0.3 } : { opacity: 1 }}
              alt="img"
            />
          </div>
        </div>
     </div> : null}

      <div onClick={open_windo} className="products_img">
        <img className="product_main_img" src={All_img_product[counter]} alt="img" />
        <div className="next_prev_btn">
            <div onClick={next_img} className="next_btn">
                <img src={next_btn} alt="next" />
            </div>
            <div onClick={prev_img} className="prev_btn">
                <img src={prev_btn} alt="next" />
            </div>
        </div>
      </div>
      <div className="thumbnails_img">
        <div
          style={
            counter === 0
              ? { outline: "2px solid rgb(255 120 5)" }
              : { outline: "none" }
          }
          className="img_box"
        >
          <img
            onClick={Change_img}
            number="0"
            src={All_thumbnails[0]}
            style={counter === 0 ? { opacity: 0.3 } : { opacity: 1 }}
            alt="img"
          />
        </div>

        <div
          style={
            counter === 1
              ? { outline: "2px solid rgb(255 120 5)" }
              : { outline: "none" }
          }
          className="img_box"
        >
          <img
            onClick={Change_img}
            number="1"
            src={All_thumbnails[1]}
            style={counter === 1 ? { opacity: 0.3 } : { opacity: 1 }}
            alt="img"
          />
        </div>

        <div
          style={
            counter === 2
              ? { outline: "2px solid rgb(255 120 5)" }
              : { outline: "none" }
          }
          className="img_box"
        >
          <img
            onClick={Change_img}
            number="2"
            src={All_thumbnails[2]}
            style={counter === 2 ? { opacity: 0.3 } : { opacity: 1 }}
            alt="img"
          />
        </div>

        <div
          style={
            counter === 3
              ? { outline: "2px solid rgb(255 120 5)" }
              : { outline: "none" }
          }
          className="img_box"
        >
          <img
            onClick={Change_img}
            number="3"
            src={All_thumbnails[3]}
            style={counter === 3 ? { opacity: 0.3 } : { opacity: 1 }}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
