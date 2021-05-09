const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "TEDDY",
    img:"https://images.unsplash.com/photo-1585251309844-3eec340559ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdCUyMHRveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
   price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
   },
  {
    name: "TEDDY2",
    img: "https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mdCUyMHRveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
    },
  {
    name: "TEDDY3",
    img:"https://images.unsplash.com/photo-1613170812802-cb91fe53612b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnQlMjB0b3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
    },
  {
    name: "TEDDY4",
    img: "https://images.unsplash.com/photo-1612798725068-70093d7d3d56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxzb2Z0JTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
  },
  {
    name: "TEDDY5",
    img: "https://images.unsplash.com/photo-1567722066597-2bdf36d13481?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHNvZnQlMjB0b3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
    },
  {
    name: "TEDDY6",
    img: "https://images.unsplash.com/photo-1616793999825-9073b5715adb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHNvZnQlMjB0b3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 500000,
    desc:
    "Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life."
    },
  
  
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log("DB seeded");
};
module.exports = seedDB;
