"use client";

import Sidebar from '../sidebar/sidebar';

const Product = () => {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-[300px] p-[24px]">
        {/* Header */}
        <div className="flex bg-white py-[15px] p-[16px] rounded-md shadow-sm justify-between items-center mb-[10px]">
          <h1 className="text-2xl font-semibold text-gray-800">Product</h1>
          <div className="text-right">
            <p className="text-[#1E1E1E] text-[18px] font-[600]">UserShop</p>
            <p className="text-[#6E6E6E] text-[14px] font-[500]">Username</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-end bg-white py-[15px] p-[16px] rounded-md shadow-sm space-x-3 mb-[10px]">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Product
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Product
          </button>
        </div>

        {/* Category Filter Section */}
        <div className="bg-white p-[15px] rounded-md shadow-sm mb-[10px] flex items-center">
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <option>All Category</option>
            <option>Clothes</option>
            <option>Electronics</option>
            <option>Furniture</option>
          </select>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-[16px]">
                  <input type="checkbox" />
                </td>
                <td className="p-[16px] flex items-center space-x-3">
                  <img
                    src="/logn&regist.png"
                    alt="product"
                    className="w-10 h-10 rounded-md"
                  />
                  <span>Camisa T-shirt</span>
                </td>
                <td className="p-[16px]">Clothes</td>
                <td className="p-[16px] text-blue-500">$9.69</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;