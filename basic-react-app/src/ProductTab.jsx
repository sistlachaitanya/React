import Product from "./Product";

export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "noWrap",
  };
  return (
    <>
      <div style={styles}>
        <Product title="Ramayanam" idx={0} />
        <Product title="Mahabharatham" idx={1} />
        <Product title="Bhagavatham" idx={2} />
        <Product title="Bhagavathgita" idx={3} />
      </div>
    </>
  );
}
