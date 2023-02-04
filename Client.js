require("dotenv").config();
const axios = require('axios');
class Client {
    constructor(name, address, phone, email,loyal) {
        this._name = name;
        this._address = address;
        this._phone = phone;
        this._email = email;
        this._loyal = loyal;
    }

    // setter for name
    set name(name) {
        this._name = name;
    }

    // getter for name
    get name() {
        return this._name;
    }

    // setter for address
    set address(address) {
        this._address = address;
    }

    // getter for address
    get address() {
        return this._address;
    }

    // setter for phone
    set phone(phone) {
        this._phone = phone;
    }

    // getter for phone
    get phone() {
        return this._phone;
    }

    // setter for email
    set email(email) {
        this._email = email;
    }

    // getter for email
    get email() {
        return this._email;
    }

    // setter for loyal
    set loyal(loyal) {
        this._loyal = loyal;
    }

    // getter for loyal
    get loyal() {
        return this._loyal;
    }
    async insert() {
        const details = {
          method: "post",
          url: `${process.env.CLIENT_POST_URL}`,
          headers: {},
          data: {
            APIKEY: `${process.env.API_KEY}`,
            mvSupplierClient: {
              SupplierClientName: this.name,
              SupplierClientShippingAddress: this.address,
              SupplierClientPhone1: this.phone,
              SupplierClientEmail: this.email,
            },
            mvRecordAction: "Insert"
          }
        };
    
        return await axios(details)
          .then(response => {
            console.log(response.data);
            return response.data.entityID;
          })
          .catch(error => {
            console.log(error);
            return -1;
          });
      }
}
module.exports = Client;