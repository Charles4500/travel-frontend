import Navigation from '../components/nav/Navigation';
import Front from '../components/public/Front';
import Publict from '../components/public/Publict';
import Search from '../components/search/Search';

function Public() {
  return (
    <div>
      <Navigation />
      <Front />
      <Search />
      <Publict />
    </div>
  );
}

export default Public;
