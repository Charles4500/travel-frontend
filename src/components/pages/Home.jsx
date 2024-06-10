import Private from '../private/Private';
import Public from '../public/Public';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Public />
      <Private />
    </div>
  );
}

export default Home;
