import Product from "./Product";
import styles from "./ProductList.module.scss";

const ProductList = (props) => {
  const { products } = props;
  return (
    <div className={styles.productsContainer}>
      <ul className={styles.productList}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.images[0]}
              link={product.thumbnail}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
