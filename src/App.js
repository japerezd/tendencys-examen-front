import * as React from 'react';
import { useForm } from './hooks/useForm';

function App() {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ';
  const url = 'https://eshop-deve.herokuapp.com/api/v2/orders';

  const [orders, setOrders] = React.useState([]);

  const [idToForm, setIdToForm] = React.useState('');

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

    addProduct(idToForm,newProduct)
    reset();
  }

  function addProduct(orderNumber, newProduct){
    const {id, sku, name, quantity, price} = newProduct
    const rows = `
     <tr key=${id}>
       <th scope='row'>${sku}</th>
       <th scope='row'>${name}</th>
       <th scope='row'>${quantity}</th>
       <th scope='row'>${price}</th>
     </tr>`
    const table = document.querySelector(`#o${orderNumber} #tableBody`);
    table.innerHTML += rows;
  }

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      setOrders(data.orders);
    }
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-primary bg-light'>
        <h2>Orders</h2>
      </nav>

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
                <table className='table' id={`o${order.number}`}>
                  <thead>
                    <tr>
                      <th scope='col'>Sku</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Price</th>
                    </tr>
                  </thead>

                  <tbody id="tableBody">
                    {/* <tr> */}
                    {order.items.map((item) => (
                      <tr key={item.id}>
                        <th scope='row'>{item.sku}</th>
                        <th scope='row'>{item.name}</th>
                        <th scope='row'>{item.quantity}</th>
                        <th scope='row'>{item.price}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

      {/*MODAL */}
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
                    // id="closeButton"
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                  <button className='btn btn-primary' type='submit'>
                    Add
                  </button>

                  <input type="hidden" value={idToForm}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
