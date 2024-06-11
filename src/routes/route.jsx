// import Moving from './Moving';
import Home from './Home';
// import Private from './Private';
// import Public from './Public';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
  // {
  //   path: '/public',
  //   element: <Public />,
  // },
  // {
  //   path: '/private',
  //   element: <Private />,
  // },
  // {
  //   path: '/moving',
  //   element: <Moving />,
  // },
]);
export default router;
