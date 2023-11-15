import React, {useState} from 'react';
import './App.css';
import Switch from './switch';
import LionKing from "./Assests/LionKing.jpg"
import Bahubali from  "./Assests/Bahubali.jpg"
import JungleBoy from "./Assests/JungleBoy.jpg"
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Since from './footer';
import AddMovie from './component/AddMovie';


  const App = () => {
    const [movies, setMovies] = useState([
      // Add your movies here
      { title: 'The Lion King', 
      description: `“The Lion King” is a captivating tale set in the African savanna 
      The story follows Simba, a young lion prince who idolizes his father
      King Mufasa, and is eager to take his place as king of the Pride Lands.`, 
      posterURL: LionKing, 
      rating: <button className='Btn'>4.5</button>},

      { title: '365 days', 
      description: ` "Baahubali:" The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli. 
      The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously`, 
      posterURL: Bahubali, 
      rating: <button className='Btn'>4.9</button>},

      { title: 'Jungle boy', 
      description: `“Jungle Boy” is a family adventure film that was released in 199812. 
      The movie revolves around a boy who lives harmoniously with animals in the jungles of India`, 
      posterURL: JungleBoy, 
      rating: <button className='Btn'>4.0</button>},
    ]);

    const addMovieToList = (movie) => {
    setMovies((previous) => [...previous, movie])
    } 
  
    const [filter, setFilter] = useState('');
  
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()) || movie.rating >= Number(filter));
    return (
      <div>
        <Switch />
        <Filter setFilter={setFilter} />
        <MovieList movies={filteredMovies} />
        <AddMovie addMovie={addMovieToList}/>
        <Since />
      </div>
    );
  };
  
  export default App;
