import '../components/pages/home.css';
import Public from '../components/public/Public';
import Private from '../components/private/Private';
import Moving from '../components/move/Moving';
import Nav from '../components/nav/Nav';

function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <Public />
        <Private />
        <Moving />
      </div>
    </>
  );
}

export default Home;
