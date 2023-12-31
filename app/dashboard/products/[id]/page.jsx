import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="IPhone" />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="$999" />
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" placeholder="72" />
          <label htmlFor="color">Color</label>
          <input type="text" id="color" name="color" placeholder="red" />
          <label htmlFor="size">Size</label>
          <input
            type="text"
            name="size"
            id="size"
            placeholder="324"
          ></input>

          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" placeholder="description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
