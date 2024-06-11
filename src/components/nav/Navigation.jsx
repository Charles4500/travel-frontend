import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to={'/'}></NavLink>
      <NavLink to={'/public'}></NavLink>
      <NavLink to={'/private'}></NavLink>
      <NavLink to={'/moving'}></NavLink>
    </div>
  );
}

export default Navigation;
