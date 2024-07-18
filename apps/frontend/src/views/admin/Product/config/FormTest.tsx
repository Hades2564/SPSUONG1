import { Fragment } from "react/jsx-runtime";
import { Button, Input } from "@mui/material";
import { DeleteOutline,EditCalendar } from '@mui/icons-material';
import axios from "axios";
import { useEffect, useState } from "react";
import {
    InventoryOutlined,
    ExpandLessOutlined,
    ExpandMoreOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import { showSnackbar } from "./ShowSnackbar";

type Data = {
    id: number;
    ma: string;
    ten: string;
};

function FormTest({
    linkGets,
    linkAdds,
    linkDeletes,
    // linkUpdates,
    labels,
}: {
    linkGets: any;
    linkAdds: any;
    linkDeletes: any;
    // linkUpdates: any;
    labels: string;
}) {
    const [datas, setDatas] = useState<Data[]>([]);
    const fetchDatas = async () => {

        try {
            const response = await axios.get(
                linkGets
            );
            setDatas(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching todos: ", error);
        }
    };
    useEffect(() => {
        fetchDatas();
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = datas.filter((datas) =>
        datas.ma.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datas.ten.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleDelete = async (id: number) => {
        try {
            // Show confirm dialog to user
            const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");

            if (confirmDelete) {
                const response = await fetch(`${linkDeletes}${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                fetchDatas();

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error deleting product:', errorData);
                    throw new Error('Error deleting product');
                }

                // Remove the deleted product from the local state
                setProducts(products.filter((product) => product.id !== id));
                window.alert('Xóa sản phẩm thành công');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductCode, setNewProductCode] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleUpdate = async (item: any) => {
        setSelectedProduct(item);
        setNewProductName(item.ten);
        setNewProductCode(item.ma);
    };
    const handleAddProduct = async () => {
        try {
            // Show confirm dialog to user
            const confirmAdd = window.confirm("Bạn có muốn thêm " + labels + " này không?");

            if (confirmAdd) {
                const response = await fetch(linkAdds, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ten: newProductName, ma: newProductCode }),
                });

                fetchDatas();

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error adding product:', errorData);
                    throw new Error('Error adding product');
                }

                const newProduct = await response.json();
                setProducts([...products, newProduct]);
                setNewProductName('');
                setNewProductCode('');
                window.alert('Thêm ' + labels + ' thành công');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    return (
        <Fragment>
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900  to-gray-800 text-white shadow-gray-900/20 shadow-lg  mb-10 p-6 ">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Quản lý {labels}</h6>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900  to-gray-800 text-white shadow-gray-900/20 shadow-lg  mb-10 p-6  ">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white text-center">Thêm {labels}</h6>
                    </div>
                    <div className="py-3 px-6  flex mb-3">
                        <div className="relative bg-clip-border mx-20 ">
                            <div>
                                <div className="  ">


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
                                    <Button
                                        variant="outlined"
                                        className=" ml-6 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                                        onClick={handleAddProduct}
                                    >
                                        Lưu
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
                    <div>
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none  items-center justify-between p-5">
                            <div className="grid grid-flow-row-dense grid-cols-8 items-center">
                                <div className=" col-span-7">
                                    <Input
                                        className="w-[100%]"
                                        placeholder={"Tìm kiếm " + labels}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}

                                    ></Input>

                                </div>
                                <div>
                                    <Button variant="outlined" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]">
                                        <SearchOutlined></SearchOutlined>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-auto max-h-[400px] border border-gray-300 rounded-md shadow-md">
                            <table className="table-auto md:table-fixed w-full text-sm">
                                <thead className="sticky top-0 bg-gray-200 z-50">
                                    <tr className="text-left">
                                        <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Stt</th>
                                        {/* <th className="border-b border-blue-gray-50 py-3 px-5 text-center">ID</th> */}
                                        <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Mã</th>
                                        <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Tên</th>
                                        <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredProducts.sort((a, b) => b.id - a.id).map((item, index) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{index + 1}</td>
                                            {/* <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.id}</td> */}
                                            <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.ma}</td>
                                            <td className="border-b border-blue-gray-50 py-3 px-5 text-center">{item.ten}</td>
                                            <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="outlined" 
                                                        className="w-2 h-8 rounded-full"
                                                        // className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-orange-400 to-orange-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                                                        onClick={() => handleUpdate(item)}
                                                    >
                                                        <EditCalendar />
                                                    </Button>
                                                    <Button
                                                        variant="outlined" 
                                                        // className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                        className="w-2 h-8 rounded-full "
                                                        // className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-red-500 to-red-300 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <DeleteOutline />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}
export default FormTest;


