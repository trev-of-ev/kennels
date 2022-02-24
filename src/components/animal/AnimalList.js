import React, { useEffect } from 'react';
import { getAllAnimals, getAnimalById } from '../../modules/AnimalManager';

export const AnimalList = () => {
  const getAnimals = () => {
    return getAllAnimals().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      We'll put some animals here eventually...
    </div>
  );
};
