import { Customer } from "../../features/customer";
import { Layout } from "../../layout/Layout";

const CustomerPage = () => {
  return <Customer />;
};

CustomerPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CustomerPage;
