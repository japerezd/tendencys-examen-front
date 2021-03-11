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
    cleanClasses();
    reset();
  }

  function cleanClasses(){
      const input = document.querySelectorAll('input');
      input.forEach(i => {
          i.classList.remove('is-valid')
      })
  }

  function validateForm(){
      const inputSku = document.querySelector('#inputSku');
      const inputName = document.querySelector('#inputName');
      const inputQuantity = document.querySelector('#inputQuantity');
      const inputPrice = document.querySelector('#inputPrice');

      if(inputSku.value === '' ){
        inputSku.classList.add('is-invalid')
      }else{
        inputSku.classList.remove('is-invalid')
        inputSku.classList.add('is-valid')
      }

      if(inputName.value === '' ){
        inputName.classList.add('is-invalid')
      }else{
        inputName.classList.remove('is-invalid')
        inputName.classList.add('is-valid')
      }

      if(inputQuantity.value === '' ){
        inputQuantity.classList.add('is-invalid')
      }else{
        inputQuantity.classList.remove('is-invalid')
        inputQuantity.classList.add('is-valid')
      }

      if(inputPrice.value === '' ){
        inputPrice.classList.add('is-invalid')
      }else{
        inputPrice.classList.remove('is-invalid')
        inputPrice.classList.add('is-valid')
      }
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
        <button className='btn btn-primary' type='submit' onClick={validateForm}>
          Add
        </button>

        <input type='hidden' value={idToForm} />
      </div>
    </form>
  );
}
