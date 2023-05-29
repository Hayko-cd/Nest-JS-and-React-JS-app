import { Home, ErrorPage } from "containers";
import { ROUTENAMES } from "routes/routenames";

export const WebsiteRoutes = [
  {
    component: <Home />,
    name: "Home",
    path: ROUTENAMES.home,
  },
  {
    component: <ErrorPage />,
    name: "ErrorPage",
    path: ROUTENAMES.not_found,
  }
];
