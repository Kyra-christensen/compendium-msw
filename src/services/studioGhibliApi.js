export async function fetchCharacter(id) {
  const res = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
  const { data } = await res.json();
  const { id, name } = data;

  return {
    id: id,
    name: name,
  };
}

export async function fetchCharacters() {
  const res = await fetch('https://ghibliapi.herokuapp.com/people');
  const { data } = await res.json();

  return data.map(({ Name }) => ({
    id: id,
    name: name,
  }));
}
