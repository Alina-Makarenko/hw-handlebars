import products from "./products.json";
import template from "./prod.hbs";

const listEl = document.querySelector(".list");

listEl.innerHTML = template({ products });