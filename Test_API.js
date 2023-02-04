require("dotenv").config();
const axios = require('axios');

const details = {
    method: 'post',
    url: `${process.env.TEST_API_KEY_URL}`,
    headers: {},
    data: {
        "APIKEY": `${process.env.API_KEY}`
    }
}

axios(details)
    .then( (response) => {
        console.log(response.data);
    })
    .catch( (error) => {
        console.log("SHIT")
        console.log(error);
    })