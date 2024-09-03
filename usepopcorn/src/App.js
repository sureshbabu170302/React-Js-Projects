import { useEffect, useState } from "react";
import { APIkey } from "./Keys/config";
import NavBar from "./Components/Navbar/Navbar";
import Search from "./Components/Navbar/Search";
import NumResults from "./Components/Navbar/NumResults";
import Main from "./Components/Main/Main";
import Box from "./Components/Main/Box";
import Loader from "./Components/Main/Loader";
import SearchMoviesList from "./Components/Movies/SearchMoviesList";
import ErrorMessage from "./Components/Errors/ErrorMessage";
import MovieDetails from "./Components/Movies/MovieDetails";
import WatchedSummary from "./Components/Movies/WatchedSummary";
import WatchedMoviesList from "./Components/Movies/WatchedMoviesList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [watched, setWatched] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${APIkey}`
        );
        if (!response.ok) {
          throw new Error("Error fetching movies!");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      {/* Navbar Area */}
      <NavBar movies={movies}>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      {/* Main Content Area */}
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SearchMoviesList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// function NavBar({ children }) {
//   return (
//     <nav className="nav-bar">
//       <Logo />
//       {children}
//     </nav>
//   );
// }

// function Logo() {
//   return (
//     <div className="logo">
//       <span role="img">🍿</span>
//       <h1>usePopcorn</h1>
//     </div>
//   );
// }

// function Search({ query, setQuery }) {
//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }

// function Loader() {
//   return <p className="loader">Loading...</p>;
// }

// function ErrorMessage({ message }) {
//   return (
//     <p className="error">
//       <span>⛔</span>
//       {message}
//     </p>
//   );
// }

// function NumResults({ movies }) {
//   return (
//     <p className="num-results">
//       Found <strong>{movies.length}</strong> results
//     </p>
//   );
// }

// function Main({ children }) {
//   return <main className="main">{children}</main>;
// }

// function Button({ isOpen, setIsOpen }) {
//   return (
//     <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//       {isOpen ? "–" : "+"}
//     </button>
//   );
// }

// function Box({ children }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="box">
//       <Button isOpen={isOpen} setIsOpen={setIsOpen} />
//       {isOpen && children}
//     </div>
//   );
// }

// function SearchMoviesList({ movies, onSelectMovie }) {
//   return (
//     <ul className="list list-movies">
//       {movies?.map((movie) => (
//         <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
//       ))}
//     </ul>
//   );
// }

// function Movie({ movie, onSelectMovie }) {
//   return (
//     <li onClick={() => onSelectMovie(movie.imdbID)}>
//       <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       <h3>{movie.Title}</h3>
//       <div>
//         <p>
//           <span>🗓</span>
//           <span>{movie.Year}</span>
//         </p>
//       </div>
//     </li>
//   );
// }

// function MovieDetails({ selectedId, onCloseMovie, onAddWatched }) {
//   const [movie, setMovie] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     Title: title,
//     Year: year,
//     Poster: poster,
//     Runtime: runtime,
//     imdbRating,
//     Plot: plot,
//     Released: released,
//     Actors: actors,
//     Director: director,
//     Genre: genre,
//   } = movie;

//   function handleAdd() {
//     const newWatchedMovie = {
//       imdbID: selectedId,
//       title,
//       year,
//       poster,
//       imdbRating: Number(imdbRating),
//       runtime: Number(runtime.split(" ").at(0)),
//     };
//     onAddWatched(newWatchedMovie);
//   }

//   useEffect(() => {
//     async function getMovieDetails() {
//       setIsLoading(true);
//       const response = await fetch(
//         `http://www.omdbapi.com/?apikey=${APIkey}&i=${selectedId}`
//       );
//       const data = await response.json();
//       setMovie(data);
//       setIsLoading(false);
//     }
//     getMovieDetails();
//   }, [selectedId]);

//   return (
//     <div className="details">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <header>
//             <button className="btn-back" onClick={onCloseMovie}>
//               &larr;
//             </button>
//             <img src={movie.Poster} alt={movie.Movie} />
//             <div className="details-overview">
//               <h2>{title}</h2>
//               <p>
//                 {released} &bull; {runtime}
//               </p>
//               <p>{genre}</p>
//               <p>
//                 <span>⭐</span>
//                 {imdbRating} IMDB Rating
//               </p>
//             </div>
//           </header>
//           <section>
//             <div className="rating">
//               <StarRating maxRating={10} size={24} />
//               <button className="btn-add" onClick={handleAdd}>
//                 + Add to list
//               </button>
//             </div>
//             <p>
//               <em>{plot}</em>
//             </p>
//             <p>Starring: {actors}</p>
//             <p>Directed by {director}</p>
//           </section>
//         </>
//       )}
//     </div>
//   );
// }

// function WatchedSummary({ watched }) {
//   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//   const avgUserRating = average(watched.map((movie) => movie.userRating));
//   const avgRuntime = average(watched.map((movie) => movie.runtime));
//   return (
//     <div className="summary">
//       <h2>Movies you watched</h2>
//       <div>
//         <p>
//           <span>#️⃣</span>
//           <span>{watched.length} movies</span>
//         </p>
//         <p>
//           <span>⭐️</span>
//           <span>{avgImdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{avgUserRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{avgRuntime} min</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// function WatchedMoviesList({ watched }) {
//   return (
//     <ul className="list">
//       {watched.map((movie) => (
//         <WatchedMovie movie={movie} key={movie.imdbID} />
//       ))}
//     </ul>
//   );
// }

// function WatchedMovie({ movie }) {
//   return (
//     <li>
//       <img src={movie.poster} alt={`${movie.title} poster`} />
//       <h3>{movie.title}</h3>
//       <div>
//         <p>
//           <span>⭐️</span>
//           <span>{movie.imdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{movie.userRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{movie.runtime} min</span>
//         </p>
//       </div>
//     </li>
//   );
// }
