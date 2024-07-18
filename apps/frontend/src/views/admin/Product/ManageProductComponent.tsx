import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import { Button, Input, Switch } from "@mui/material";
import { showSnackbar } from "./config/ShowSnackbar";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import {
  InventoryOutlined,
  ExpandLessOutlined,
  ExpandMoreOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
type LinkEntity = {
  name: string;
  url: string;
  icon: any;
};

type Todo = {
  id: number;
  ma: string;
  ten: string;
};
 
function ManageProductComponent() {
  const links: LinkEntity[] = [
    {
      name: "add sản phẩm",
      url: "/manage/add-san-pham",
      icon: <InventoryOutlined />,
    },
    {
      name: "màu sản phẩm",
      url: "/manage/mau-san-pham",
      icon: <InventoryOutlined />,
    },
    {
      name: "kích thước sản phẩm",
      url: "/manage/kich-thuoc-san-pham",
      icon: <InventoryOutlined />,
    },
    {
      name: "họa tiết",
      url: "/manage/hoa-tiet",
      icon: <InventoryOutlined />,
    },
    
  ];

  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {

    try {
      const response = await axios.get(
        'http://localhost:8080/api/product/'
      );
      setTodos(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching todos: ", error);
    }
  };

  return (
    <Fragment>
      <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900  to-gray-800 text-white shadow-gray-900/20 shadow-lg  mb-10 p-6 ">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Quản Mkkkkàu sắc</h6>
        <Dropdown
          label="Quản lý thuộc tính"
          links={links}
          icon={<Inventory2Icon></Inventory2Icon>}
        ></Dropdown>
      
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
          <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900  to-gray-800 text-white shadow-gray-900/20 shadow-lg  mb-10 p-6  ">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white text-center">Thêm màu sắc</h6>
          </div>
          <div className="py-3 px-6  flex mb-3">
            <div className="relative bg-clip-border mx-20 ">
              <MyFormAdd refeshTable={fetchTodos} />
            </div>
          </div>
        </div> */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm">
          <FormTable refeshTable={fetchTodos} todos={todos} />
        </div>

      </div>
    </Fragment>
  );
}







const FormTable = ({ refeshTable, todos }: { refeshTable: () => Promise<void>, todos: Todo[] }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    refeshTable();
  }, []);

  const handleDeleteStaff = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/size/delete/${id}`);
      refeshTable(); // Refresh staff list after deletion
      showSnackbar('Đã xóa nhân viên thành công.'); // Call the showSnackbar function
    } catch (error) {
      console.error('Error deleting staff:', error);
      showSnackbar('Xóa nhân viên thất bại.'); // Call the showSnackbar function
    }
  };
  return (
    <div>
      {/* <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-5">
        <div className="flex gap-5   ">
          <Input className="w-[100%]" placeholder="Tìm kiếm sản  phẩm" ></Input>
          <Button variant="outlined" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]">
            <SearchOutlined></SearchOutlined>
          </Button>
        </div>
      </div> */}

      <div className="overflow-auto max-h-[400px] border border-gray-300 rounded-md shadow-md">
        <table className="table-auto md:table-fixed w-full text-sm">
          <thead className="sticky top-0 bg-gray-200 z-50">
            <tr className="text-left">
              <th className="border-b border-blue-gray-50 py-3 px-5 text-center ">Stt</th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-center ">Số lượng</th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-center ">Mã</th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Tên</th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {todos.sort((a, b) => b.id - a.id).map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{index + 1}</td>
                <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.id}</td>
                <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.ma}</td>
                <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.ten}</td>
                <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                  <div className="flex gap-2">
                    {/* <Button
                      variant="outlined" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-orange-400 to-orange-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                      onClick={() => { }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-red-500 to-red-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                      onClick={() => handleDeleteStaff(item.id)}
                    >
                      Delete
                    </Button> */}
                    <Switch />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const Dropdown = ({
  links,
  label,
  icon,
}: {
  links: LinkEntity[];
  label: string;
  icon: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <Fragment>
      {/* form list lựa chọn */}
      <div >
        <div className="">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full justify-between flex hover:bg-gray-200 p-2 rounded-md"
          >
            <span className="flex gap-2">
              {icon}
              {label}
            </span>
            {isOpen ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </button>
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden  ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const MyFormAdd = ({ refeshTable }: { refeshTable: () => Promise<void> }) => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCode, setNewProductCode] = useState('');

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/size/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ma: newProductName, ten: newProductCode }),
      });

      refeshTable()

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error adding product:', errorData);
        throw new Error('Error adding product');
      }

      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewProductCode('');
      console.log(setNewProductName)
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      {/* form add sản phẩm */}
      <div className="  ">
        <div className="form-group w-full">
          <label htmlFor="ten" className="block text-sm font-medium text-gray-700">
            Tên
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="ten"
            name="ten"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group w-full">
          <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
            Mã
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="ma"
            name="ma"
            value={newProductCode}
            onChange={(e) => setNewProductCode(e.target.value)}
            required
          />
        </div>

        <Button
          variant="outlined"
          className=" ml-6 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
          onClick={handleAddProduct}
        >
          Add kích thước
        </Button>
      </div>
    </div>
  );
};
export default ManageProductComponent;


