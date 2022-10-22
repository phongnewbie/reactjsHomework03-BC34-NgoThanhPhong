import React, { Component } from "react";

import DanhSachSanPham from "./DanhSachSanPham";
import Products from "./Products";
import ShoeData from "./ShoeData.json";
export default class TrangChuSanPham extends Component {
  state = {
    shoesState: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  hanldeChiTiet = (shoesType) => {
    this.setState({ shoesState: shoesType });
  };
  render() {
    let { shoesState } = this.state;
    return (
      <div className="container card-gruop bg-danger">
        <div>
          <header className="font-weight-bolder ">SHOES SHOPPING MALL</header>
        </div>
        <div>
          <div>
            <div>
              <DanhSachSanPham
                shoeData={ShoeDatasProps}
                hanldeChiTiet={this.hanldeChiTiet}
              />
              <Products shoesState={shoesState} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
