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
  const [query, setQuery] = useState("inception");

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

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${APIkey}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Error fetching movies!");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
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
    return () => {
      controller.abort();
    };
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
