import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
// // {
//     links,
// //     // label,
// // }: {
//     links: string;
// //     // label: string;
// // }
const AddTest = ({
    links,
    label,
}: {
    links: any;
    label: string;
}) => {
    const [showModal, setShowModal] = useState(false);

    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductCode, setNewProductCode] = useState('');

    const handleAddProduct = async () => {
        try {
            const response = await fetch(links, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ten: newProductName, ma: newProductCode }),
            });
            setShowModal(false)
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
        <div className=' py-2 px-2 '>
            <div className='md:flex z-2'>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                    onClick={() => setShowModal(true)}
                >
                    <AddIcon />
                </button>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                                <button
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >


                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            {label}
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 grid  gap-4">
                                    <div className="">


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


                                    </div>

                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleAddProduct}
                                >
                                    Add
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddTest;