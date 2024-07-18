import { Fragment } from "react/jsx-runtime";
import FormTest from "./config/FormTest"

const ManageProductDetailComponent = () => {
    return (
        <Fragment>
            <FormTest labels="họa tiết"  linkGets="http://localhost:8080/api/LHT/" 
            linkAdds="http://localhost:8080/api/LHT/post" linkDeletes="http://localhost:8080/api/LHT/delete/"/>
        </Fragment>
    );
}

export default ManageProductDetailComponent;