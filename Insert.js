const axios = require('axios');
const Product = require('./Product');
const Client = require('./Client');
const Warehouse = require('./Warehouse');
const Tax = require('./Tax');
const Discount = require('./Discount');
const SalesOrder = require('./SalesOrder');
require("dotenv").config();
async function main() {
  // Product
  const product = new Product("1112256", "Nike Shoes", 99.99, 44.99);
  const productId = await product.insert();
  console.log("Product inserted with ID:", productId);

  // Client
  const client = new Client("babis", "babis@exampletest.com", "Example 8, Athens", "1235698967");
  const clientId = await client.insert();
  console.log("Client inserted with ID:", clientId);

  // Warehouse
  const warehouse = new Warehouse("Main2", "Example2 20, Athens", "Main2 Location");
  const warehouseId = await warehouse.insert();
  console.log("Warehouse inserted with ID:", warehouseId);

  // Tax
  const tax = new Tax("My shop tax", 24);
  const taxId = await tax.insert();
  console.log("Tax inserted with ID:", taxId);

  // Discount
  const discount = new Discount("Loyalty customers discount", 50);
  const discountId = await discount.insert();
  console.log("Discount inserted with ID:", discountId);

  // Sales Order
  const salesOrder = new SalesOrder(clientId, warehouseId, "1112256", 2, taxId, discountId);
  const salesOrderId = await salesOrder.insert();
  console.log("Sales Order inserted with ID:", salesOrderId);
}

main();