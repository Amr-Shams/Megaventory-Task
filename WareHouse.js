require("dotenv").config();
const axios = require('axios');
class Warehouse {

    constructor(abbrivation, address, name) {
        this._abbrivation = abbrivation;
        this._address = address;
        this._name = name;
        console.log(this._abbrivation)
    }

    get abbrivation() {
        return this._abbrivation;
    }

    set abbrivation(value) {
        this._abbrivation = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
async insert() {
        const details = {
            method: 'post',
            url: `${process.env.WAREHOUSE_POST_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvInventoryLocation": {
                    "InventoryLocationName": this.name,
                    "InventoryLocationAbbreviation": this.abbrivation,
                    "InventoryLocationAddress": this.address
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.entityID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            });
    }
}
module.exports=Warehouse;