import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config';

export const MainRoute: FC = () => {
  const routers =
    routeConfig.map(RouteElement => (<Route
      path = {RouteElement.path}
      element = { <RouteElement.element/>}
      key={RouteElement.path}
    />));

  return (<Routes>
    {routers}
  </Routes>)
};