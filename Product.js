require("dotenv").config();
const axios = require('axios');

class Product {
 constructor(sku, description, salesPrice, purchasePrice) {
    this._sku = sku;
    this._description = description;
    this._salesPrice = salesPrice;
    this._purchasePrice = purchasePrice;
  }

  // Getter for sku
  get sku() {
    return this._sku;
  }

  // Setter for sku
  set sku(value) {
    this._sku = value;
  }

  // Getter for description
  get description() {
    return this._description;
  }

  // Setter for description
  set description(value) {
    this._description = value;
  }

  // Getter for salesPrice
  get salesPrice() {
    return this._salesPrice;
  }

  // Setter for salesPrice
  set salesPrice(value) {
    this._salesPrice = value;
  }

  // Getter for purchasePrice
  get purchasePrice() {
    return this._purchasePrice;
  }

  // Setter for purchasePrice
  set purchasePrice(value) {
    this._purchasePrice = value;
  }

 async insert() {
  const data = {
    APIKEY: process.env.API_KEY,
    mvProduct: {
      ProductSKU: this.sku,
      ProductDescription: this.description,
      ProductSellingPrice: this.salesPrice,
      ProductPurchasePrice: this.purchasePrice,
    },
    mvRecordAction: "Insert"
  };

  const config = {
    method: "post",
    url: process.env.PRODUCT_POST_URL,
    headers: {},
    data,
  };

  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data.entityID;
  } catch (error) {
    console.log(error);
    return -1;
  }
}
}

module.exports = Product;
