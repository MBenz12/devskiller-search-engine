import React, { useState } from 'react'

import products from '../assets/products.json';
import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    setPrice({
      ...price,
      [name]: value
    });
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
    setColumns({
      ...columns,
      [name]: checked,
    });
  }

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
    return products.filter(product => 
      (price.priceFrom === '' || product.price >= price.priceFrom) && 
      (price.priceTo === '' || product.price <= price.priceTo)
    );
  }

  let displayedProducts = filterProducts();
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
