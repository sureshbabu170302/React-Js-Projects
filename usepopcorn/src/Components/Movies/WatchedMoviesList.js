import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((watchedMovie) => (
        <WatchedMovie watchedMovie={watchedMovie} key={watchedMovie.imdbID} />
      ))}
    </ul>
  );
}
