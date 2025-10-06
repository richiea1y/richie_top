const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const listItems = people.map((person)=> <li>{person}</li>)


function Greeting() {
  return (
    <>
      <h1>&quot; I swear by my pretty floral bonnet, I will end you. &quot;</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default Greeting;