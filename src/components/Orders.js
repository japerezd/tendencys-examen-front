import React from 'react';
import Products from './Products';

export default function Orders({orders, setIdToForm}) {


  return (
    <div className='accordion accordion-flush' id='accordionExample'>
      {orders.map((order) => (
        <div className='accordion-item' key={order.id}>
          <h2 className='accordion-header' id={order.number}>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#o` + order.id}
              aria-expanded='true'
              aria-controls={order.id}
            >
              #Order: <strong>{order.number}</strong>
            </button>
          </h2>

          <div
            id={'o' + order.id}
            className='accordion-collapse collapse'
            aria-labelledby={order.number}
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>

              <Products product={order}/>

              <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                onClick={() => setIdToForm(order.number)}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
