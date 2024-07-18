import { SetStateAction, useEffect, useState } from "react";
import { Button } from "@mui/material";
import AlpineModal from "./config/AddColor"
import ShowFormSize from "./config/AddSize"
import AddTest from "./config/AddTest"
import AddDetailedProduct from "./config/AddDetailedProduct"
import axios from "axios";
import {
  InventoryOutlined,
  ExpandLessOutlined,
  ExpandMoreOutlined,
  SearchOutlined,
} from "@mui/icons-material";

interface IProps {
  selectedColors: any[]
  setSelectedColors: React.Dispatch<SetStateAction<any>>
  selectedSizes: any[]
  setSelectedSizes: React.Dispatch<SetStateAction<any>>
  selectedDetailedProducts: any[]
  setSelectedDetailedProducts: React.Dispatch<SetStateAction<any>>
  show: boolean;
  setShow: (show: boolean) => void;
}

type Option = {
  id: number;
  ma: string;
  ten: string;
};

interface SelectedDetailedProducts {
  id: number;
  ma: string;
  soLuong: number;
  gia: number;
  moTaNgan: string;
  moTaChiTiet: string;
  sanPham: string;
  mauSac: string;
  kichThuoc: string;
  loaiHoaTIet: string;
  moTaHoaTiet: string;
  nuocSanXuat: string;
  thuongHieu: string;
  kieuCoAo: string;
  kieuTaiAo: string;
  kieuDangAo: string;
  chatLieu: string;
  doDayCuaVai: string;
  khaNangCoDan: string;
  hinhAnh: string;

}
function ManageAddProductComponent() {

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedDetailedProducts, setSelectedDetailedProducts] = useState<SelectedDetailedProducts[]>([]);
  const [show, setShow] = useState(false);


  return (
    <div >
      <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg mb-8 p-6 mt-5">
        <h2 className="block antialiased tracking-normal  text-center font-semibold leading-relaxed text-white text-2xl">
          Thêm sản phẩm
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm">

          <FormAddProperties
            setSelectedColors={setSelectedColors} selectedColors={selectedColors}
            selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes}
            selectedDetailedProducts={selectedDetailedProducts} setSelectedDetailedProducts={setSelectedDetailedProducts}
            show={show} setShow={setShow}

          />

        </div>
      </div>
    </div>
  );
}

const FormAddProperties: React.FC<IProps> = ({ selectedColors, setSelectedColors, selectedSizes, setSelectedSizes, show, setShow, selectedDetailedProducts, setSelectedDetailedProducts }) => {


  const [productName, setProductName] = useState('');
  const [selectedTypeOfDecorator, setSelectedTypeOfDecorator] = useState("");
  const [selectedDecorator, setSelectedDecorator] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedMaterialType, setSelectedMaterialType] = useState("");
  const [selectedMaterialThickness, setSelectedMaterialThickness] = useState("");
  const [selectedStretchability, setSelectedStretchability] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");
  const [selectedCollar, setSelectedCollar] = useState("");
  const [selectedSleeve, setSelectedSleeve] = useState("");

  if (selectedColors.length != 0 && selectedSizes.length != 0) {
    setShow(true)
  }

  useEffect(() => {
    setSelectedDetailedProducts([{
      sanPham: productName,
      mauSac: selectedColors,
      kichThuoc: selectedSizes,
      loaiHoaTIet: selectedTypeOfDecorator,
      moTaHoaTiet: selectedDecorator,
      nuocSanXuat: selectedManufacturer,
      thuongHieu: selectedBrand,
      kieuCoAo: selectedDesign,
      kieuTaiAo: selectedCollar,
      kieuDangAo: selectedSleeve,
      chatLieu: selectedMaterialType,
      doDayCuaVai: selectedMaterialThickness,
      khaNangCoDan: selectedStretchability,
    }])
  }, [
    productName,
    selectedTypeOfDecorator,
    selectedDecorator,
    selectedBrand,
    selectedManufacturer,
    selectedMaterialType,
    selectedMaterialThickness,
    selectedStretchability,
    selectedDesign,
    selectedCollar,
    selectedSleeve,
    selectedColors,
    selectedSizes])

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };


  const handleTypeOfDecoratorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTypeOfDecorator(event.target.value);
  };

  const handleDecoratorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDecorator(event.target.value);

  };

  const handleBrandSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };
  const handleManufacturerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedManufacturer(event.target.value);
  };
  const handleMaterialSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterialType(event.target.value);
  };
  const handleThinnessSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterialThickness(event.target.value);
  };
  const handleStretchabilitySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStretchability(event.target.value);
  };
  const handleDesignSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDesign(event.target.value);
  };
  const handleCollarSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollar(event.target.value);
  };
  const handleSleeveSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSleeve(event.target.value);
  };

  // useEffect(() => {
  //   console.log("Selected Loại họa tiết:", selectedTypeOfDecorator);
  //   console.log("Selected Mô tả họa tiết:", selectedDecorator);


  // }, [selectedTypeOfDecorator, selectedDecorator]);





  return (
    <div>
      <div className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300  shadow-gray-900/20 shadow-lg mb-5 p-2 mt-5">
        <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black ">
          Sản phẩm
        </h4>
        <div className="md:flex mb-4">

          <div className="md:flex-1 md:pl-3">
            <label htmlFor="ten" className="block text-sm font-medium text-gray-700">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="ten"
              name="ten"
              required
              value={productName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      < Dropdown label="Họa tiết sản phẩm" code={

        <div className="md:flex mb-4">
          <div className="md:flex-1 md:pr-10">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Loại họa tiết
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/LHT/"
                  value={selectedTypeOfDecorator}
                  onChange={handleTypeOfDecoratorSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/LHT/post" label="Thêm Loại họa tiết" />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:pr-3">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Mô Tả họa tiết
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/MTHT/"
                  value={selectedDecorator}
                  onChange={handleDecoratorSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/MTHT/post" label="Thêm mô tả họa tiết" />
              </div>
            </div>
          </div>
        </div>
      } />
      <Dropdown label="Xuất xứ sản phẩm" code={
        <div  >

          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-10">
              <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
                Thương hiệu
              </label>
              <div className="grid grid-flow-row-dense grid-cols-7 items-center">
                <div className=" col-span-6">
                  <Select
                    link="http://localhost:8080/api/TH/"
                    value={selectedBrand}
                    onChange={handleBrandSelect}
                  />
                </div>
                <div>
                  <AddTest links="http://localhost:8080/api/TH/post" label="Thêm hãng " />
                </div>
              </div>
            </div>
            <div className="md:flex-1 md:pr-3">
              <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
                Nước sản xuất
              </label>
              <div className="grid grid-flow-row-dense grid-cols-7 items-center">
                <div className=" col-span-6">
                  <Select
                    link="http://localhost:8080/api/NSX/"
                    value={selectedManufacturer}
                    onChange={handleManufacturerSelect}
                  />
                </div>
                <div>
                  <AddTest links="http://localhost:8080/api/NSX/post" label="Thêm nước sản xuất" />
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
      <Dropdown label=" Chất liệu sản phẩm" code={
        <div className="md:flex mb-4">
          <div className="md:flex-1 md:pr-10">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Loại chất liệu
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/CL/"
                  value={selectedMaterialType}
                  onChange={handleMaterialSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/CL/post" label="Thêm loại chất liệu" />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:pr-3">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Dộ dày của chất liệu
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/DDCV/"
                  value={selectedMaterialThickness}
                  onChange={handleThinnessSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/DDCV/post" label="Thêm độ dày của chất liệu" />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:pr-3">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              khả năng co dãn
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/KNCD/"
                  value={selectedStretchability}
                  onChange={handleStretchabilitySelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/KNCD/post" label="Thêm khả năng co dãn" />
              </div>
            </div>
          </div>
        </div>
      } />
      <Dropdown label="Kiểu dáng sản phẩm" code={

        <div className="md:flex mb-4">
          <div className="md:flex-1 md:pr-10">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Kiểu dáng áo
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/KDA/"
                  value={selectedDesign}
                  onChange={handleDesignSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/KDA/post" label="Thêm kiểu dáng áo" />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:pr-3">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Kiểu cổ áo
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/KCA/"
                  value={selectedCollar}
                  onChange={handleCollarSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/KCA/post" label="Thêm kiểu cổ áo" />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:pr-3">
            <label htmlFor="ma" className="block text-sm font-medium text-gray-700">
              Kiểu tay áo
            </label>
            <div className="grid grid-flow-row-dense grid-cols-7 items-center">
              <div className=" col-span-6">
                <Select
                  link="http://localhost:8080/api/KTA/"
                  value={selectedSleeve}
                  onChange={handleSleeveSelect}
                />
              </div>
              <div>
                <AddTest links="http://localhost:8080/api/KTA/post" label="Thêm kiểu tay áo" />
              </div>
            </div>
          </div>
        </div>
      } />
      <div className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300  shadow-gray-900/20 shadow-lg mb-5 p-2">
        <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black ">
          Màu sắc sản phẩm
        </h4>
        <AlpineModal selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
      </div>
      <div
        className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300  shadow-gray-900/20 shadow-lg mb-5 p-2"
      >
        <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black ">
          Size sản phẩm
        </h4>
        <ShowFormSize selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} />
      </div>

      <div>
        <div >
          {show && <AddDetailedProduct selectedDetailedProducts={selectedDetailedProducts} setSelectedDetailedProducts={setSelectedDetailedProducts} />}
        </div>
      </div>






      <div
        className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden  mb-5 p-2 flex items-center justify-center"
      >
        <button
          className=" ml-6 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4   rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-white shadow-gray-100/20 border border-gray-100  hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
        > thêm </button>

      </div>



    </div>
  )

}

const Select = ({
  link,
  value,
  onChange,
}: {
  link: any;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const [dataOption, setDataOption] = useState<Option[]>([]);
  const fetchDataOption = async () => {
    try {
      const response = await axios.get(link);
      setDataOption(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchDataOption();
  }, []);


  return (
    <div className="md:flex">
      <select
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={value}
        onChange={onChange}
        onClick={() => fetchDataOption()}
      >
        <option value="">Chọn...</option>
        {dataOption.sort((a, b) => b.id - a.id).map((item) => (
          <option key={item.id} value={item.id}>
            {item.ten}
          </option>
        ))}
      </select>
    </div>
  );
};

const Dropdown = ({
  code,
  label,
}: {
  code: string;
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-300  shadow-gray-900/20 shadow-lg mb-5 p-2">
      <div >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between flex hover:bg-gray-200 p-2 rounded-md"
        >
          <h4 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-black ">
            {label}
          </h4>
          {isOpen ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
        </button>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden  ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >

        {code}
      </div>
    </div>
  );
};


export default ManageAddProductComponent;