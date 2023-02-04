require("dotenv").config();
const axios = require('axios');
class SalesOrder {
    constructor(client_id, warehouse_id, product_sku, quantity, tax_id, discount_id) {
        this._client_id = client_id;
        this._warehouse_id = warehouse_id;
        this._product_sku = product_sku;
        this._quantity = quantity;
        this._tax_id = tax_id;
        this._discount_id = discount_id;
    }

    get client_id() {
        return this._client_id;
    }

    set client_id(value) {
        this._client_id = value;
    }

    get warehouse_id() {
        return this._warehouse_id;
    }

    set warehouse_id(value) {
        this._warehouse_id = value;
    }

    get product_sku() {
        return this._product_sku;
    }

    set product_sku(value) {
        this._product_sku = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get tax_id() {
        return this._tax_id;
    }

    set tax_id(value) {
        this._tax_id = value;
    }

    get discount_id() {
        return this._discount_id;
    }

    set discount_id(value) {
        this._discount_id = value;
    }
    async insert() {
        let data;
        if(this.discount_id==-1)
        data=
          {
            APIKEY: process.env.API_KEY,
            mvSalesOrder: {
              SalesOrderClientId: this.client_id,
              SalesOrderInventoryLocationID: this.warehouse_id,
              SalesOrderStatus: "Verified",
              SalesOrderDetails: [
                {
                  SalesOrderRowProductSKU: this.product_sku,
                  SalesOrderRowQuantity: this.quantity,
                  SalesOrderRowTaxID: this.tax_id
                }
              ]
            },
            mvRecordAction: "Insert"
          } 
          else
          data=
          {
            APIKEY: process.env.API_KEY,
            mvSalesOrder: {
              SalesOrderClientId: this.client_id,
              SalesOrderInventoryLocationID: this.warehouse_id,
              SalesOrderStatus: "Verified",
              SalesOrderDetails: [
                {
                  SalesOrderRowProductSKU: this.product_sku,
                  SalesOrderRowQuantity: this.quantity,
                  SalesOrderRowTaxID: this.tax_id,
                  SalesOrderRowDiscountID: this.discount_id,
                }
              ]
            },
            mvRecordAction: "Insert"
          };
      
        const request = {
          method: 'post',
          url: process.env.SALES_ORDER_POST_URL,
          headers: {},
          data: data
        };
      
        try {
          const response = await axios(request);
          console.log(response.data);
          return response.data.entityID;
        } catch (error) {
          console.log(error);
          return -1;
        }
      }
      
}

module.exports = SalesOrder;
