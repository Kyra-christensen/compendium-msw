import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCharacter } from '../../services/animeApi';
import Spinner from '../../assets/Spinner.gif';
import Card from '../../components/Character/Card';

export default function Detail() {
  const [characterArr, setCharacterArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { character } = useParams();
  
  useEffect(() => {
    const getCharacter = async () => {
      const characterData = await fetchCharacter(character);
      console.log(character);
      setCharacterArr(characterData);
      setIsLoading(false);
    };
    getCharacter();
  }, [character]);
  return (
    <>
      <p>
        <Link to='/quotes'>Back to list</Link>
      </p>
      {
        isLoading ? (
          <img src={Spinner} />
        ) : (
          <div>
            <p>Character: <strong>{character}</strong></p>
            {
              characterArr.map((character) => {
                return (
                  <div key={character.quote}>
                    <div>
                      <p>"{character.quote}" <br></br> from the anime: <strong>{character.anime}</strong>.</p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        )
      }
    </>
  )
}
