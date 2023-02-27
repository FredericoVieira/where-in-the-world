import { useRoutes } from "hookrouter";
import routes from "../routes/routes";

const Content = () => {
  const routeResult = useRoutes(routes);
  return routeResult || "Not Found Page";
};

export default Content;
