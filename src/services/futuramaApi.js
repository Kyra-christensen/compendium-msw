export async function fetchCharacter(name) {
  const res = await fetch(`futuramaapi.herokuapp.com/api/characters/${name}`);
  const { data } = await res.json();
  const { Name } = data;

  return {
    name: Name,
  };
}

export async function fetchCharacter() {
  const res = await fetch('futuramaapi.herokuapp.com/api/v2/characters');
  const { data } = await res.json();

  return data.map(({ Name }) => ({
    name: Name,
  }));
}
