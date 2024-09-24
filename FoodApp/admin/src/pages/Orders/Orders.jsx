import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import Footer from "../../components/Footer/Footer";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error("Error updating order status");
      }
    } catch (error) {
      toast.error("Error updating order status");
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`${url}/api/order/${orderId}`);
      if (response.data.success) {
        toast.success("Order deleted successfully");
        setOrders(orders.filter(order => order._id !== orderId));
      } else {
        toast.error(response.data.message || "Error deleting order");
      }
    } catch (error) {
      toast.error("Error deleting order");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length === 0 ? (
          <p className='no-orders-message'>Nothing to show</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className='order-item-food'>
                  <b style={{ color: 'blue', fontSize: '17px' }}>Product : </b>
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index < order.items.length - 1 ? (
                        <span style={{ color: 'tomato', fontSize: '1.5em' }}> ; </span>
                      ) : ""}
                    </span>
                  ))}
                </p>
                <p className='order-item-address-p'><b style={{ color: 'blue', fontSize: '17px' }}>Address :</b></p>
                <p className="order-item-name">
                  <b style={{ color: 'tomato', fontSize: '15px' }}>First Name : </b>{order.address.firstName}
                  <b style={{ color: 'tomato', fontSize: '15px' }}>Last Name : </b>{order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p><b style={{ color: 'tomato', fontSize: '15px' }}>Address : </b>{order.address.street}</p>
                  <p>
                    <b style={{ color: 'tomato', fontSize: '15px' }}>City : </b>{order.address.city}, 
                    <b style={{ color: 'tomato', fontSize: '15px' }}>State : </b>{order.address.state}, 
                    <b style={{ color: 'tomato', fontSize: '15px' }}>Country : </b>{order.address.country}, 
                    <b style={{ color: 'tomato', fontSize: '15px' }}>Zip code : </b>{order.address.zipcode}
                  </p>
                </div>
                <p className='order-item-phone'>
                  <b style={{ color: 'tomato', fontSize: '15px' }}>Phone number : </b>{order.address.phone}
                </p>
                <br></br>
                <p><b style={{ color: 'blue', fontSize: '17px' }}>Payment Status : </b>
                  <span style={{ color: order.payment === true ? 'green' : 'red', fontSize: '17px' }}>
                  {order.payment === true ? 'Paid' : 'Not Paid'}
                  </span>
                </p>
              </div>
              <p><b style={{ color: 'tomato', fontSize: '15px' }}>Items : </b><span style={{ color: 'blue', fontSize: '17px' }}>{order.items.length}</span></p>
              <p><b style={{ color: 'blue', fontSize: '17px' }}>Total price : </b><span style={{ color: 'red', fontSize: '17px' }}>${order.amount}</span></p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out of delivery">Out of delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <button onClick={() => deleteOrder(order._id)} className='delete-button'>Delete</button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;                     