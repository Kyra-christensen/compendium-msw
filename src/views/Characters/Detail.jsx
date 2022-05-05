import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCharacter } from '../../services/animeApi';

export default function Detail() {
  const [characterObj, setCharacterObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { character } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const characterData = await fetchCharacter(character);
      setCharacterObj(characterData);
      setIsLoading(false);
    };
    getCharacter();
  }, [character]);

  return (
    <div>Detail</div>
  )
}
