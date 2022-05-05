import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Character/Card';
import Search from '../../components/Character/Search';
import { fetchCharacters } from '../../services/animeApi';
import Spinner from '../../assets/Spinner.gif';

export default function List() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const characterList = isSearching ? results : characters;

  const handleSearch = (search) => {
    setIsSearching(!!search.length);
    const filteredCharacters = characters.filter((character) => character.character.toLowerCase().includes(search.toLowerCase().trim())
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
      <p>
        <Link to='/'>Back to homepage</Link>
      </p>
      <h3>Anime Characters</h3>
      {isLoading ? (
          <img src={Spinner}/>
        ) : (
          <>
            
            <Search onSearch={handleSearch} />
            <ul>
              {characterList.map((character) => {
                return (
                  <li key={character.character}>
                    <Link to={`/quotes/${character.character}`}>
                      <Card character={character} />
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
