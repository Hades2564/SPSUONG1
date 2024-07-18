
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootComponent from './components/RootComponent.tsx'
import BaseAdminComponent from './views/admin/BaseAdminComponent.tsx'
import ManageProductComponent from './views/admin/Product/ManageProductComponent.tsx'
import ManageComponentDemo from './views/admin/ManageCommentDemo.tsx'
import ReportComponent from './views/admin/ReportComponent.tsx'
import SellInShopComponent from './views/admin/SellInShopComponent.tsx'
import ManageBillComponent from './views/admin/bill/ManageBillComponent.tsx'
import ManageProductDetailComponent from './views/admin/ManageProductDetailComponent.tsx'
import ManageCustomerComponent from './views/admin/ManageCustomerComponent.tsx'
import ManageStaffComponent from './views/admin/ManageStaffComponent.tsx'
import { ThemeProvider } from "@material-tailwind/react"
import ListVoucher from './views/admin/discount/ListVoucher.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import ManageVoucherComponent from './views/admin/discount/ManageVoucherComponent.tsx'
import ConfirmBillComponent from './views/admin/bill/ConfirmBillComponent.tsx'
import ManageAddProductComponent from "./views/admin/Product/ManageAddProductComponent.tsx";
import ManageSizeProductComponent from "./views/admin/Product/ManageSizeProductComponent.tsx";
import ManageColorProductComponent from "./views/admin/Product/ManageColorProductComponent.tsx";
import ManageTypeOfDecoratoComponent from "./views/admin/Product/ManageTypeOfDecoratoComponent.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<RootComponent />}>
      <Route path='manage' element={<BaseAdminComponent />}>
        <Route path='' element={<ReportComponent />}></Route>
        <Route path='ban-hang' element={<SellInShopComponent />}></Route>
        <Route path='thong-ke' element={<ReportComponent />}></Route>

        <Route path='san-pham' element={<ManageProductComponent />}>
        </Route>
        <Route
          path="add-san-pham"
          element={<ManageAddProductComponent />}
        ></Route>
        <Route
          path="kich-thuoc-san-pham"
          element={<ManageSizeProductComponent />}
        ></Route>
        <Route
          path="mau-san-pham"
          element={<ManageColorProductComponent />}
        ></Route>
        <Route
          path="hoa-tiet"
          element={<ManageTypeOfDecoratoComponent />}
        ></Route>
      
        <Route path='san-pham-chi-tiet' element={<ManageProductDetailComponent />}></Route>
        <Route path='khuyen-mai' element={<ManageVoucherComponent />}></Route>
        <Route path='hoa-don'>
          <Route path='' element={<ManageBillComponent/>}/>
          <Route path=':id' element={<ConfirmBillComponent/>}/>
        </Route>
        <Route path='khach-hang' element={<ManageCustomerComponent />}></Route>
        <Route>
          <Route path="khuyen-mai" element={<ManageVoucherComponent />} />
          <Route path="khuyen-mai/list" element={<ListVoucher />} />
        </Route>
        <Route path='nhan-vien' element={<ManageStaffComponent />}></Route>
        <Route path='demo' element={<ManageComponentDemo />}></Route>
      </Route>
      <Route path="nhan-vien" element={<ManageStaffComponent />}></Route>
      <Route path="demo" element={<ManageComponentDemo />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
