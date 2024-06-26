import Moving from './Moving';
import Home from './Home';
import Private from './Private';
import Public from './Public';
import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Hire from './Hire';
import Rent from './Rent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/public',
    element: <Public />,
  },
  {
    path: '/private',
    element: <Private />,
  },
  {
    path: '/moving',
    element: <Moving />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/hire',
    element: <Hire />,
  },
  {
    path: '/rent',
    element: <Rent />,
  },
]);
export default router;
