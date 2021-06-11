import { renderRoutes } from 'react-router-config';
const Root = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);
export default Root;