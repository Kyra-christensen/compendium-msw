import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Character/Card';
import Search from '../../components/Character/Search';
import { fetchCharacters } from '../../services/studioGhibliApi';
import Spinner from '../../assets';

export default function List() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const characterList = isSearching ? results : characters;

  const handleSearch = (search) => {
    setIsSearching(!!search.length);
    const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setResults(filteredCharacters);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const characterData = await fetchCharacters();
      setCharacters(characterData);
      setIsLoading(false);
    };
    getCharacters();
  }, []);

  return ( 
    <>
      <h3>Characters from Studio Ghibli Films</h3>
      {isLoading ? (
          <img src={Spinner}/>
        ) : (
          <>
            <Search onSearch={handleSearch} />
            <ul>
              {characterList.map((character) => {
                return (
                  <li key={character.id}>
                    <Link to={`/people/${character.id}`}>
                      <CharacterCard name={character.name} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {isSearching && !results.length && <p>No results</p>}
    </>
  );
}
