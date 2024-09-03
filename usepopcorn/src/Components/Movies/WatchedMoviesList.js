import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched, handleDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((watchedMovie) => (
        <WatchedMovie
          watchedMovie={watchedMovie}
          handleDeleteWatched={handleDeleteWatched}
          key={watchedMovie.imdbID}
        />
      ))}
    </ul>
  );
}
