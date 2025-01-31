import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import Home from "../pages/home.page";

const routes = [{ path: "/", component: Home }];

const Routes = () => {
  return (
    <AppRoutes>
      {routes?.map(({ path, component: Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </AppRoutes>
  );
};

export default Routes;
