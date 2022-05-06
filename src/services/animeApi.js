export async function fetchCharacter(character) {
  const res = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${character}`);
  const data = await res.json();
  return(data);
}

export async function fetchCharacters() {
  const res = await fetch('https://animechan.vercel.app/api/quotes');
  const data = await res.json();
  return(data);
}
