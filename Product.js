import React from "react";

function Product(props) {
  return (
    <div>
      {/* <div class="name">{props.name}</div>
      <div class="price">{props.price}</div>
      <div class="desc">{props.description}</div> */}

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="name">{props.name}</div>
                    <img src={props.imageurl} alt="MyImage" /> </div>
                <div class="flip-card-back">
                    <div class="price">$ {props.price}</div>
                    <div class="description">{props.description}
                    <p><button>Add to Cart</button></p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
}

export default Product;