import { useEffect, useState } from "react";
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
import { useLocalStorageState } from "./Hooks/useLocalStorageState";
import { useMovies } from "./Hooks/useMovies";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched");
  //   if (storedValue) {
  //     return JSON.parse(storedValue);
  //   } else return [];
  // });
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
