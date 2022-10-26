import React, { Component } from "react";
import Products from "./Products";
import shoeData from "./shoeData.json";
import DanhSachSanPham from "./DanhSachSanPham";

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
        <div className="card-gruop">
          <div className="card">
            <div className="card-body row">
              <DanhSachSanPham
                shoeDatasProps={shoeData}
                hanldeChiTiet={this.hanldeChiTiet}
              />
              <Products shoesState={shoeData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
