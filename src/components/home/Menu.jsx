// src/components/Menu.js

import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { fetchProducts } from "../../features/products/productsSlice.js";
import { addToCart} from "../../features/cart/cartSlice.js";
import Pagination from "../pagination/pagination.js";

const Menu = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const addToCartHandler = (itemNum) => {
    dispatch(addToCart(itemNum));
  };

  const handlePageChange = (pageNumber)=>{
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        {currentItems.map((product, index) => (
          <MenuCard
            key={product.id}
            itemNum={product.id}
            burgerSrc={product.image}
            price={product.price}
            title={product.title}
            handler={addToCartHandler}
            delay={index * 0.2}
          />
        ))}
      </div>


      <Pagination
      itemsPerPage = {itemsPerPage}
      totalItems = {products.length}
      currentPage = {currentPage}
      onPageChange = {handlePageChange}
      />
    </section>
  );
};

export default Menu;
