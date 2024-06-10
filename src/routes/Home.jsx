import '../components/pages/home.css';
import Public from '../components/public/Public';
import Private from '../components/private/Private';
import Moving from '../components/move/Moving';
import Nav from '../components/nav/Nav';

function Home() {
  return (
    <div className="home">
      <Nav />
      <Public />
      <Private />
      <Moving />
    </div>
  );
}

export default Home;
