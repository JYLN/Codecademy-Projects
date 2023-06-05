import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';
// Import useSearchParams
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  // Get searchParams object from useSearchParams

  const petNameToFind = searchParams.get('name'); // Get query parameter using searchParams object

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets('', petNameToFind);

      setPets(petsData);
    }

    getPetsData();
  }, [petNameToFind]);

  return (
    <div className='page'>
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className='grid'>
          {pets.map(pet => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
