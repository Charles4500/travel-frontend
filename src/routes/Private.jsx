import Nav from '../components/nav/Nav';

function Private() {
  return (
    <div>
      <Nav />
      <div className="cardd">
      <div className="contentt">
        <p className="heading">Convenience?</p>
        <p className="paran">
          Click on the button below to check on the privately available cars to
          hire and reach your destination safely
        </p>
        <button className="btun">Private</button>
      </div>
    </div>
    </div>
  );
}

export default Private;