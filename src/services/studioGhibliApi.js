export async function fetchCharacter(id) {
  const res = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
  const { data } = await res.json();

  return {
    id: data.id,
    name: data.name,
  };
}

export async function fetchCharacters() {
  const res = await fetch('https://ghibliapi.herokuapp.com/people');
  const { data } = await res.json();
  console.log(res);
  return data.map(() => ({
    id: data.id,
    name: data.name,
  }));
}
