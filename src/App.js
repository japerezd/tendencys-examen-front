import * as React from 'react';
import Swal from 'sweetalert2';
import Orders from './components/Orders';
import Modal from './components/ui/Modal';

function App() {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ';
  const url = 'https://eshop-deve.herokuapp.com/api/v2/orders';

  const [orders, setOrders] = React.useState([]);

  const [idToForm, setIdToForm] = React.useState('');

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

      <Orders orders={orders} setIdToForm={setIdToForm} />

      <button
        className='btn btn-success btn-lg'
        onClick={() => {
          Swal.fire(
            'Successful purchase!',
            'You purchased the products',
            'success'
          );
        }}
      >
        Buy
      </button>

      <Modal idToForm={idToForm} />
    </div>
  );
}

export default App;
