import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from "../../components/Footer/Footer"

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        toast.success(response.data.message);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      toast.error("Error fetching list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // Refresh the list after removing an item
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))
        ) : (
          <div className='no-orders-message'>
            <p>No items to display</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default List;

/////////////////////////////////////// DEMO /////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import './List.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import Footer from "../../components/Footer/Footer";

// const List = ({ url }) => {
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`);
//       if (response.data.success) {
//         setList(response.data.data);
//         toast.success(response.data.message);
//       } else {
//         toast.error("Error fetching list");
//       }
//     } catch (error) {
//       toast.error("Error fetching list");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className='list add flex-col' style={{ pointerEvents: 'none' }}>
//       <p>All Foods List</p>
//       <div className='list-table'>
//         <div className='list-table-format title'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           {/* Action column removed */}
//         </div>
//         {list.length > 0 ? (
//           list.map((item, index) => (
//             <div key={index} className='list-table-format'>
//               <img src={`${url}/images/` + item.image} alt={item.name} />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//               {/* Removed the delete action */}
//             </div>
//           ))
//         ) : (
//           <div className='no-orders-message'>
//             <p>No items to display</p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default List;

