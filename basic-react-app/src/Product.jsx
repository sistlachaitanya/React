import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["2100", "3200", "1200", "1599"];
  let newPrices = ["1999", "2999", "799", "999"];
  let description = [
    ["Ramaya namaha", "Rama Charitham"],
    ["Vyasa Virachitham", "Ganesha Likhitham"],
    ["Krishna Katha", "Krishnaya Namaha"],
    ["Veda Saram", "Jagadguru Krishnaya namaha"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
