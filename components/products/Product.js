import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Product.module.scss";

const Product = (props) => {
  const { title, image, description, link } = props;

  return (
    <li className={styles.product}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          // width={500}
          // height={500}
          placeholder="blur"
          blurDataURL={image}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.title}>{title}</div>
      <div>{description}</div>
      <a href={link} target="_blank" rel="noreferrer">
        More Info
        <IoIosArrowForward />
      </a>
    </li>
  );
};

export default Product;
