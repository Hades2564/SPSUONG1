import { SetStateAction, useEffect, useState } from "react";
import AddTest from "./config/AddTest"
import axios from "axios";
import {
    InventoryOutlined,
    ExpandLessOutlined,
    ExpandMoreOutlined,
    SearchOutlined,
} from "@mui/icons-material";

type Option = {
    id: number;
    ma: string;
    ten: string;
};
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

const FormAddProperties: React.FC<IProps> = ({ }) => {
    
    return (
        <div>
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
                                />
                            </div>
                            <div>
                                <AddTest links="http://localhost:8080/api/MTHT/post" label="Thêm mô tả họa tiết" />
                            </div>
                        </div>
                    </div>
                </div>
            } />
        </div>
    )
}



const Select = ({
    link,
    onChange,
}: {
    link: string;
    onChange?: (value: string) => void;
}) => {
    const [dataOption, setDataOption] = useState<Option[]>([]);
    const fetchDataOption = async () => {
        try {
            const response = await axios.get(link);
            setDataOption(response.data);
        } catch (error) {
            console.error("Error fetching options: ", error);
        }
    };

    useEffect(() => {
        fetchDataOption();
    }, [link]);

    return (
        <div className="md:flex">
            <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="">Chọn...</option>
                {dataOption.sort((a, b) => b.id - a.id).map((item) => (
                    <option key={item.id} value={item.ma}>
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