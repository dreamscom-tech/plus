import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import Products from "../../Components/products_scroll";
import MainFooter from "../../Components/MainFooter";

//styles
import "../Design/home.css";
import "../Design/cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <main>
          <section className="cart_main_ctr">
            <div className="cart_head_ctr">
              <h1>My Cart</h1>
            </div>
            <div></div>
            <div className="cart_items_ctr">
              <div>
                <div>Item</div>
                <div>Qty</div>
                <div>Unit Price</div>
                <div>Total Amount</div>
              </div>
              <div>
                {[1, 2, 3, 4, 5].map((v, i) => (
                  <CartItem />
                ))}
              </div>
              <div>Total Amount UGX 50,000</div>
            </div>
          </section>
          <section className="products-scroll-ctr">
            <Products />
          </section>
          <section className="products-scroll-ctr">
            <Products />
          </section>
          <section className="products-scroll-ctr">
            <Products />
          </section>
        </main>
        <MainFooter />
      </>
    );
  }
}

export default Cart;

const CartItem = () => {
  return (
    <div>
      <div className="cart_item">
        <div>
          <div className="cart_item_img">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="cart_item_name">
            <div>
              Product name made in bold - Brief Description made in small format
            </div>
            <div>Remove from Cart button</div>
          </div>
        </div>
        <div>
          <div className="cart_item_qty_ctr">
            <div>&minus;</div>
            <div>1</div>
            <div>&plus;</div>
          </div>
        </div>
        <div>
          <div className="cart_item_unitprice_ctr">
            <div>UGX 50,000</div>
          </div>
        </div>
        <div>
          <div className="cart_item_totalprice_ctr">
            <div>UGX 50,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};
