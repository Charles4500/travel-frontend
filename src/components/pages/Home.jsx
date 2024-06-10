import Private from '../private/Private';
import Public from '../public/Public';
import Nav from '../nav/Nav';
import './home.css';
import Moving from '../move/Moving';

function Home() {
  return (
    <>
      <a>Home</a>
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
