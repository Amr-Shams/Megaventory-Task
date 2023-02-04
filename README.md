# Megaventory project
This project is designed to integrate an e-shop with Megaventory, a cloud-based inventory management platform. The project uses the Megaventory API to insert data into the e-shop's account on Megaventory. The project is developed using Node.js and the Axios library for making API calls. The dotenv library is used for loading environmental variables.

The project aims to insert the following data into a Megaventory account: a product with a SKU, description, sales price, and purchase price, a client with a name, email, shipping address, and phone number, a warehouse with an abbreviation, name, and address, a tax with a name and value, a discount with a name and value, and a sales order with a client, product, and quantity.

To run the project, you need to have npm and node installed. Clone the repository and run npm install in the main directory. Then, create a Megaventory account and generate an API key to authenticate API calls. Fill in the API key in the .env file. You can also change the file's URLs if desired. To test the API key, run npm run test_api_key and to insert the data, run npm run insert..
## Requirements
* `npm` installed
* `node` installed
## Execution
In order to execute the project you need to:
* Clone the repository.
* Run `npm install` in the main directory.
* Go to [www.megaventory.com](https://www.megaventory.com/) and create an account. Then, you can generate your own API key in order to provide authentication to your API calls.
* Fill out your own API key into the `.env` file. You can change the file's urls if you wish to use another similar API.
* Run `npm run test_api_key` in the terminal, if you want to check if your API key is valid.
* Run `npm run insert` in the terminal to insert the above data to your Megaventory account.
