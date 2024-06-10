import Private from '../private/Private';
import Public from '../public/Public';
import Nav from '../nav/Nav';
import './home.css';

function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <Public />
        <Private />
      </div>
    </>
  );
}

export default Home;
