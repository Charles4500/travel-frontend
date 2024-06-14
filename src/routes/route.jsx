import Moving from './Moving';
import Home from './Home';
import Private from './Private';
import Public from './Public';
import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Rent from '../components/private/Rent';

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
    path: '/rent',
    element: <Rent />,
  },
]);
export default router;
