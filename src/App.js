import * as React from 'react'

function App() {
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ'
  const url = 'https://eshop-deve.herokuapp.com/api/v2/orders';

  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData(){
      const response = await fetch(url,{
        headers:{
          Authorization: token
        }
      });
      const data = await response.json();
      setOrders(data.orders)
      console.log(data.orders)
    }
    fetchData()
  },[])

  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-primary bg-light'>
        {/* <a class='navbar-brand' href='#'>
            Navbar
          </a> */}
        hola
      </nav>

      <div className='container'>
        <ul>
          {
            orders.map(order => (
              <li key={order.id}>
                {order.number}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
