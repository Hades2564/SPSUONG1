import { Fragment } from "react/jsx-runtime";
import FormTest from "./config/FormTest"

const ManageSizeProductComponent = () => {
  return (
    <Fragment>
      <FormTest labels="kích thước" linkGets="http://localhost:8080/api/size/"
        linkAdds="http://localhost:8080/api/size/post" linkDeletes="http://localhost:8080/api/size/delete/" />
    </Fragment>
  );
}

export default ManageSizeProductComponent;