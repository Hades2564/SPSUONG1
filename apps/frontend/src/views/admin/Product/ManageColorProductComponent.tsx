import { Fragment } from "react/jsx-runtime";
import FormTest from "./config/FormTest"

const ManageColorProductComponent = () => {
  return (
    <Fragment>
      <FormTest labels="màu sắc" linkGets="http://localhost:8080/api/color/"
        linkAdds="http://localhost:8080/api/color/post" linkDeletes="http://localhost:8080/api/color/delete/" />
    </Fragment>
  );
}

export default ManageColorProductComponent;