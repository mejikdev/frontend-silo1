import { Agent } from "../../features/agent";
import { Layout } from "../../layout/Layout";

const AgentPage = () => {
  return <Agent />;
};

AgentPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default AgentPage;
