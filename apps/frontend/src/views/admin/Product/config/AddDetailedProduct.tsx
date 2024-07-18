import { DeleteOutline } from '@mui/icons-material';
import React, { useState, useEffect, SetStateAction } from 'react';

interface IProps {
    selectedDetailedProducts: any[];
    setSelectedDetailedProducts: React.Dispatch<SetStateAction<any>>;
}

const AddDetailedProduct: React.FC<IProps> = ({ selectedDetailedProducts, setSelectedDetailedProducts }) => {
    const [sanPham, setSanPham] = useState<any[]>([]);

    // Hàm tạo các tổ hợp sản phẩm với màu sắc, kích thước và thuộc tính khác
    function createCombinations(mauSac: any[], kichThuoc: any[], extraProps: any) {
        let id = 1;
        return mauSac.flatMap(color =>
            kichThuoc.map(size => ({
                id: id++,
                color: color.name, // Lưu tên màu sắc
                size: size.name,
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

    useEffect(() => {
        // Lấy danh sách màu sắc và kích thước từ sản phẩm đã chọn
        const mauSac = selectedDetailedProducts[0].mauSac?.map(mauSac => ({ id: mauSac.id, name: mauSac.ten })) || [];
        const kichThuoc = selectedDetailedProducts[0].kichThuoc?.map(kichThuoc => ({ id: kichThuoc.id, name: kichThuoc.ten })) || [];

        // Tạo các tổ hợp sản phẩm
        const result = createCombinations(
            mauSac,
            kichThuoc,
            {
                sanPham: selectedDetailedProducts[0].sanPham,
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
        );

        // Cập nhật state với các tổ hợp sản phẩm
        setSanPham(result);
        console.log(result)
    }, [selectedDetailedProducts]);

    // Xử lý khi xóa một sản phẩm
    const handleDelete = (id: number) => {
        const updatedSanPham = sanPham.filter(item => item.id !== id);
        setSanPham(updatedSanPham);
    }

    return (
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300 shadow-gray-900/20 shadow-lg mb-5 p-2">
            <div>
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
                            {sanPham.map((data, index) => (
                                <tr key={data.id}>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {index + 1} {/* Hiển thị số thứ tự */}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.sanPham}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {/* {data.color} */}
                                        <div
                                            key={data.color}
                                            className="m-2 p-2 rounded-md flex items-center"
                                            style={{ backgroundColor: data.color }}
                                        ></div>
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        {data.size}
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <input
                                            type="number"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id={`soLuong-${data.id}`}
                                            name={`soLuong-${data.id}`}
                                            required
                                        />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <input
                                            type="number"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id={`gia-${data.id}`}
                                            name={`gia-${data.id}`}
                                            required
                                        />
                                    </td>
                                    <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                                            onClick={() => handleDelete(data.id)}
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
