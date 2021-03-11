import React from 'react';
import { useForm } from '../hooks/useForm';

export default function AddProducts({idToForm}) {

  const [formValues, handleInputChange, reset] = useForm({
    sku: '',
    name: '',
    quantity: '',
    price: '',
  });

  const { sku, name, quantity, price } = formValues;

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      sku: sku,
      name: name,
      quantity: quantity,
      price: price,
    };

    addProduct(idToForm, newProduct);
    reset();
  }

  function addProduct(orderNumber, newProduct) {
    const { id, sku, name, quantity, price } = newProduct;
    const rows = `
         <tr key=${id}>
           <th scope='row'>${sku}</th>
           <th scope='row'>${name}</th>
           <th scope='row'>${quantity}</th>
           <th scope='row'>${price}</th>
         </tr>`;
    const table = document.querySelector(`#o${orderNumber} #tableBody`);
    table.innerHTML += rows;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='inputSku' className='form-label'>
          Sku
        </label>
        <input
          value={sku}
          type='number'
          className='form-control'
          name='sku'
          id='inputSku'
          aria-describedby='sku'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputName' className='form-label'>
          Name
        </label>
        <input
          value={name}
          type='text'
          className='form-control'
          name='name'
          id='inputName'
          aria-describedby='name'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputQuantity' className='form-label'>
          Quantity
        </label>
        <input
          value={quantity}
          type='number'
          className='form-control'
          name='quantity'
          id='inputQuantity'
          aria-describedby='quantity'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPrice' className='form-label'>
          Price
        </label>
        <input
          value={price}
          type='number'
          name='price'
          className='form-control'
          id='inputPrice'
          aria-describedby='price'
          onChange={handleInputChange}
          required
        />
      </div>

      <div className='modal-footer'>
        <button
          type='button'
          className='btn btn-secondary'
          data-bs-dismiss='modal'
        >
          Close
        </button>
        <button className='btn btn-primary' type='submit'>
          Add
        </button>

        <input type='hidden' value={idToForm} />
      </div>
    </form>
  );
}
