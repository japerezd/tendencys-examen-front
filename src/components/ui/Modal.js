import React from 'react';
import AddProducts from '../AddProducts';

export default function Modal({idToForm}) {
  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Add new product to order {idToForm}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>

                <AddProducts idToForm={idToForm}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
