import * as React from 'react';

function App() {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ';
  const url = 'https://eshop-deve.herokuapp.com/api/v2/orders';

  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      setOrders(data.orders);
      console.log(data.orders);
    }
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-primary bg-light'>Orders</nav>

      <div className='accordion accordion-flush' id="accordionExample">
        {orders.map((order) => (
          <div className='accordion-item' key={order.id}>
            <h2 className='accordion-header' id={order.number}>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#o`+order.id}
                // data-bs-target="#hola"
                aria-expanded='true'
                aria-controls={order.id}
              >
                #Order: <strong>{order.number}</strong>
              </button>
            </h2>

            <div
              id={"o"+order.id}
              className='accordion-collapse collapse'
              aria-labelledby={order.number}
              data-bs-parent='#accordionExample'
            >
              {/* <div class='accordion-body'>{order.items[0]}</div> */}
              <div className="accordion-body">
                {/* {order.items[0].sku}
                <br/>
                {order.items[0].name}
                <br/>
                {order.items[0].quantity}
                <br/>
                {order.items[0].price} */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        Sku
                      </th>
                      <th scope="col">
                        Name
                      </th>
                      <th scope="col">
                        Quantity
                      </th>
                      <th scope="col">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <tr> */}
                    {

                    order.items.map(item => (
                      <tr>
                      <th scope="row">{item.sku}</th>
                      <th scope="row">{item.name}</th>
                      <th scope="row">{item.quantity}</th>
                      <th scope="row">{item.price}</th>
                      </tr>
                    ))
                    }
                      
                    {/* </tr> */}
                  </tbody>
                  <br/>
                  <button className="btn btn-primary">
                    Add Product
                  </button>
                </table>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
