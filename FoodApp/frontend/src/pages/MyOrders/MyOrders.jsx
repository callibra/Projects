import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [hasOrders, setHasOrders] = useState(false);
    const [isSunday, setIsSunday] = useState(false);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(`${url}/api/order/userorders`, {}, { headers: { token } });
            const orders = response.data.data.filter(order => order.payment === true); // Filter orders where payment is true
            setData(orders);
            setHasOrders(orders.length > 0); // Check if there are any orders
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
        // Check if today is Sunday
        const today = new Date();
        setIsSunday(today.getDay() === 0); // 0 represents Sunday
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {data.length === 0 ? (
                    <p className='no-orders-message'>Nothing to show</p>
                ) : (
                    data.map((order, index) => (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <p>
                                {order.items.map((item, index) => (
                                    index === order.items.length - 1
                                        ? `${item.name} x ${item.quantity}`
                                        : `${item.name} x ${item.quantity}, `
                                ))}
                            </p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b> {order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    ))
                )}
            </div>
            <br></br>
            {isSunday && <p className='order-message sunday-message'>Sunday, we don't deliver orders. Thanks!</p>}
            {hasOrders && <p className='order-message'>Your order will be deleted by Admin after 3 months!</p>}
        </div>
    );
};

export default MyOrders;
