import List from './List';

function Cars({ cars }) {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {cars.map((car) => (
        <List key={car.id} {...car} />
      ))}
    </div>
  );
}

export default Cars;
