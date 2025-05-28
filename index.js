import generateProductDescriptions from "./util.js";


const products = ["baju", "celana", "topi", "jaket", "sepatu"];
const colors = ["merah", "kuning", "hijau", "pink", "ungu"];
const prices = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];

// Condition 1
const products1 = ["baju", "celana", "topi", "jaket", "sepatu"];
const colors1 = ["merah", "kuning", "hijau", "pink", "ungu", "maroon"];
const prices1 = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];


const originalResult = generateProductDescriptions(products, colors, prices);
const result1 = generateProductDescriptions(products1, colors1, prices1);

console.log({
    originalResult,
    result1,

});