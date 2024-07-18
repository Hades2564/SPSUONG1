


import { DeleteOutline } from '@mui/icons-material';
import React, { useState, useEffect, SetStateAction } from 'react';

interface IProps {
    selectedDetailedProducts: any[]
    setSelectedDetailedProducts: React.Dispatch<SetStateAction<any>>
}
const AddDetailedProduct: React.FC<IProps> = ({ selectedDetailedProducts, setSelectedDetailedProducts }) => {

    // const handleDelete = (colorIndex: number, sizeIndex: number) => {
    //     // Tạo bản sao của selectedDetailedProducts
    //     const updatedSelectedDetailedProducts = [...selectedDetailedProducts];

    //     // Xóa dòng tương ứng trong bản sao
    //     updatedSelectedDetailedProducts[0].kichThuoc?.splice(sizeIndex, 1);

    //     // Cập nhật lại state
    //     setSelectedDetailedProducts(updatedSelectedDetailedProducts);
    // };

    // mau [a, b]
    //  co [c, d]

    // can taoj to hopw [{a,c}, {a,d}, {b,c}, {b,d}]

    type sp = {
        ma: string;
        ten: string;
    };

    const mauSac = selectedDetailedProducts[0].mauSac?.map((mauSac) => mauSac.id);
    const kichThuoc = selectedDetailedProducts[0].kichThuoc?.map((kichThuoc) => kichThuoc.id);

    const [sanPham, setSanPham] = useState<sp[]>([]);
    useEffect(() => {
        generateRandom()
        // console.log(sanPham)
        console.log(result);
    }, [])

    const generateRandom = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 4; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setSanPham([{
            ma: result,
            ten: selectedDetailedProducts[0].sanPham,
        }]);
    };

    function createCombinations(mauSac, kichThuoc, extraProps) {
        let id = 1;
        return mauSac.flatMap(color =>
            kichThuoc.map(size => ({
                id: id++,
                color,
                size,
                sanPham: extraProps.sanPham,
                loaiHoaTiet: extraProps.loaiHoaTiet,
                moTaHoaTiet: extraProps.moTaHoaTiet,
                nuocSanXuat: extraProps.nuocSanXuat,
                thuongHieu: extraProps.thuongHieu,
                kieuCoAo: extraProps.kieuCoAo,
                kieuTaiAo: extraProps.kieuTaiAo,
                kieuDangAo: extraProps.kieuDangAo,
                chatLieu: extraProps.chatLieu,
                doDayCuaVai: extraProps.doDayCuaVai,
                khaNangCoDan: extraProps.khaNangCoDan
            }))
        );
    }

    const result= (createCombinations(
        mauSac,
        kichThuoc,
        {
            sanPham: sanPham[0].ten,
            loaiHoaTiet: selectedDetailedProducts[0].loaiHoaTIet,
            moTaHoaTiet: selectedDetailedProducts[0].moTaHoaTiet,
            nuocSanXuat: selectedDetailedProducts[0].nuocSanXuat,
            thuongHieu: selectedDetailedProducts[0].thuongHieu,
            kieuCoAo: selectedDetailedProducts[0].kieuCoAo,
            kieuTaiAo: selectedDetailedProducts[0].kieuTaiAo,
            kieuDangAo: selectedDetailedProducts[0].kieuDangAo,
            chatLieu: selectedDetailedProducts[0].chatLieu,
            doDayCuaVai: selectedDetailedProducts[0].doDayCuaVai,
            khaNangCoDan: selectedDetailedProducts[0].khaNangCoDan
        }
    ));
  

    return (
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300 shadow-gray-900/20 shadow-lg mb-5 p-2">

            <div  >
                <div className="overflow-auto max-h-[400px] border border-gray-300 rounded-md shadow-md">
                    <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black">
                        Danh sách sản phẩm
                    </h4>
                    <table className="table-auto md:table-fixed w-full text-sm">
                        <thead className="sticky top-0 bg-gray-200 z-50">
                            <tr className="text-left">
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Stt</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Sản phẩm</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Màu sắc</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Kích cỡ</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Số lượng</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Giá</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {result.map((data, index) => (
                                <tr key={index}>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.id}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.sanPham}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.color}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.size}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <input
                                            type="number"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="soLuong"
                                            name="soLuong"
                                            required
                                        />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <input
                                            type="number"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="gia"
                                            name="gia"
                                            required
                                        />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                                        >
                                            <DeleteOutline />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AddDetailedProduct;