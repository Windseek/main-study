import Index from '../App';
import Root from '../root';
import Home from '../home/index';
const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Index
      },
      {
        path: "/home",
        component: Home
      }
    ]
  }
];
export default routes;