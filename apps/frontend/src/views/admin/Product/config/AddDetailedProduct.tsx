import { DeleteOutline } from '@mui/icons-material';
import React, { useState, useEffect, SetStateAction } from 'react';
import { SanPhamChiTietEntity } from '../../../../entity/SanPhamChiTietEntity';

interface IProps {
  selectedDetailedProducts: any[];
  setSelectedDetailedProducts: React.Dispatch<SetStateAction<any>>;
}


const AddDetailedProduct: React.FC<IProps> = ({ selectedDetailedProducts, setSelectedDetailedProducts }) => {
  const [sanPhamCT, setSanPhamCT] = useState<any[]>([]);
  const nameProduts = selectedDetailedProducts[0].sanPham;
  const saveProduct = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/product/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ma: `SP${Math.floor(Math.random() * 900) + 100}`, ten: nameProduts }),
      });

      if (response.ok) {
        console.log('Sản phẩm đã được lưu vào database');
        return response.json(); // Trả về sản phẩm đã được lưu với ID
      } else {
        console.error('Lỗi khi lưu sản phẩm vào database');
        throw new Error('Lỗi khi lưu sản phẩm vào database');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
      throw error;
    }
  };
  const saveProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/SPCT/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanPhamCT.map(p => ({ 
          ma: p.ma,
          mauSac: p.color, 
          KichThuoc: p.size,
          sanPham: p.sanPham,
          loaiHoaTiet: p.loaiHoaTiet,
          moTaHoaTiet: p.moTaHoaTiet,
          nuocSanXuat: p.nuocSanXuat,
          thuongHieu: p.thuongHieu,
          kieuCoAo: p.kieuCoAo,
          kieuTaiAo: p.kieuTaiAo,
          kieuDangAo: p.kieuDangAo,
          chatLieu: p.chatLieu,
          doDayCuaVai: p.doDayCuaVai,
          khaNangCoDan: p.khaNangCoDan,
          gia: p.gia,
          soLuong: p.soLuong,
}))),
      });

      if (response.ok) {
        console.log('Các sản phẩm đã được lưu vào database');
        return await response.json(); // Trả về danh sách sản phẩm đã được lưu, bao gồm ID
      } else {
        console.error('Lỗi khi lưu các sản phẩm vào database');
        throw new Error('Lỗi khi lưu các sản phẩm vào database');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
      throw error;
    }
  };
  
  const handleSaveProducts = async () => {

    try {
      // Lưu sản phẩm
      //  saveProduct();
      saveProducts();
      console.log('Sản phẩm và sản phẩm chi tiết đã được lưu vào database');
    } catch (error) {
      console.error('Lỗi khi lưu sản phẩm và sản phẩm chi tiết:', error);
    }
  };



  // Hàm tạo các tổ hợp sản phẩm với màu sắc, kích thước và thuộc tính khác
  function createCombinations(mauSac: any[], kichThuoc: any[], extraProps: any) {
    let id = 1;
    return mauSac.flatMap(color =>
      kichThuoc.map(size => ({
        id: id++,
        ma: `SPCT${Math.floor(Math.random() * 900) + 100}`,
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
        khaNangCoDan: extraProps.khaNangCoDan,
        gia: extraProps.gia,
        soLuong: extraProps.soLuong,
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
        khaNangCoDan: selectedDetailedProducts[0].khaNangCoDan,
        gia: selectedDetailedProducts[0].gia,
        soLuong: selectedDetailedProducts[0].soLuong,
      }
    );

    // Cập nhật state với các tổ hợp sản phẩm
    setSanPhamCT(result);
    console.log(result)
  }, [selectedDetailedProducts]);

  // Xử lý khi xóa một sản phẩm
  const handleDelete = (id: number) => {
    const updatedSanPham = sanPhamCT.filter(item => item.id !== id);
    setSanPhamCT(updatedSanPham);
  }

  const [checkboxs, setCheckboxs] = useState<boolean>(false)

  const [checkedInput, setCheckedInput] = useState<Record<string, boolean>>({});

  const handleCheckBoxAll = (isSelect: boolean) => {
    setCheckboxs(isSelect)
    const newCheckedInput: Record<string, boolean> = {};
    sanPhamCT.forEach((s: SanPhamChiTietEntity) => {
      newCheckedInput[s.id] = isSelect;
    });
    setCheckedInput(newCheckedInput);
    console.log(newCheckedInput)
  };

  const handleCheckBoxRieng = (isSelect: boolean, idSPCT: number) => {
    const newCheckedInput: Record<string, boolean> = {};
    sanPhamCT.filter(s => s.id === idSPCT).forEach((s: SanPhamChiTietEntity) => {
      newCheckedInput[s.id] = isSelect;
    });
    setCheckedInput(prevState => ({
      ...prevState,
      [idSPCT]: isSelect
    }));
    console.log(newCheckedInput)
  };

  useEffect(() => {
    console.log(checkedInput)
  }, [checkedInput])



  return (
    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300 shadow-gray-900/20 shadow-lg mb-5 p-2">
      <div>
        <div className="overflow-auto max-h-[400px] border border-gray-300 rounded-md shadow-md">
          <div className='flex justify-between'>
            <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black">
              Danh sách sản phẩm
            </h4>

            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-gray-100/20 border border-gray-100 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
            >
              sửa
            </button>
          </div>

          {/* <div>
            <input type="number" value={gias} onChange={handleGiaChange}/>
            <input type="number" value={sls} onChange={handleSLChange} />
          </div> */}
          <table className="table-auto md:table-fixed w-full text-sm">
            <thead className="sticky top-0 bg-gray-200 z-50">
              <tr className="text-left">
                <th> <input type='checkbox' checked={checkboxs} onClick={() => handleCheckBoxAll(!checkboxs)} /></th>
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
              {sanPhamCT.map((data, index) => (
                <tr key={data.id}>
                  <td> <input type='checkbox' checked={checkedInput[data.id]} onClick={() => handleCheckBoxRieng(!checkedInput[data.id], data.id)} /></td>
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
                      value={data.soLuong}
                      onChange={(e) => setSanPhamCT(prev =>
                        prev.map(item =>
                          item.id === data.id ? { ...item, soLuong: e.target.value } : item
                        ))}
                      required
                    />
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-center">
                    <input
                      type="number"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      id={`gia-${data.id}`}
                      name={`gia-${data.id}`}
                      value={data.gia}
                      onChange={(e) => setSanPhamCT(prev =>
                        prev.map(item =>
                          item.id === data.id ? { ...item, gia: e.target.value } : item
                        )
                      )}
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

      <div
        className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden  mb-5 p-2 flex items-center justify-center"
      >
        <button
         
         className=" ml-6 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
          onClick={handleSaveProducts}
        > Lưu </button>

      </div>
    </div>
  );
};

export default AddDetailedProduct;
