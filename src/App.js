import React from "react";
import "./styles.css"
import StationaryProducts from "./StationaryProducts";
import Product from "./Product";

export default function App() {
    const productComponents = StationaryProducts.map (product => (
        <Product key={product.id} name={product.name} description={product.description} price={product.price} imageurl={product.imageurl}/> 
    ));

    return (
        <div className="App">
            <h1>Developer Essentials Shop</h1>
            <div class="topnav">
                <a class="active" href="#home">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.."/>
            </div>
            <div class="parallax-container">
                <div class="parallax"></div>
            </div>
            <div class="introtext">
                <h3>New for May 2020</h3>
                <div class="introtext-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mi tincidunt sapien fermentum maximus in eget tellus. Cras pellentesque lobortis quam eu volutpat. Maecenas fringilla nulla sit amet augue bibendum elementum. Curabitur tempus tellus id suscipit convallis. Integer tortor nisl, rhoncus non est ac, bibendum tristique justo. Phasellus dapibus hendrerit quam, vitae luctus turpis pulvinar vel. In vel orci nec lectus convallis sagittis ut ac nibh. Nam vestibulum orci nibh. Nam efficitur metus augue, eu dapibus metus fringilla ut. Etiam dictum eleifend elit non ultricies.</p>
                <p></p></div>
            </div>
            <div class="container">{productComponents}</div>
            <div class="spacing"></div>
            <div class="footer">
                <p>© 2020 Stationary Products, Inc </p>
            </div>
        </div>
    )
}
