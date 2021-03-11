import React from 'react';

export default function Products({product}) {
  return (
    <table className='table' id={`o${product.number}`}>
      <thead>
        <tr>
          <th scope='col'>Sku</th>
          <th scope='col'>Name</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Price</th>
        </tr>
      </thead>

      <tbody id='tableBody'>
        {/* <tr> */}
        {product.items.map((item) => (
          <tr key={item.id}>
            <th scope='row'>{item.sku}</th>
            <th scope='row'>{item.name}</th>
            <th scope='row'>{item.quantity}</th>
            <th scope='row'>{item.price}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
