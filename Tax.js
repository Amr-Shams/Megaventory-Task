require("dotenv").config();
const axios = require('axios');

class Tax {
    constructor(name, value) {
        this._name = name;
        this._value = value;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    async insert() {
        const data = {
            method: 'post',
            url: `${process.env.TAX_POST_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvTax": {
                    "TaxName": this.name,
                    "TaxValue": this.value
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(data)
            .then( (response) => {
                console.log(response.data);
                return response.data.entityID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }
}
module.exports = Tax;