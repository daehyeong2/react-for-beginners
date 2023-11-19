import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              background_image={movie.background_image}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
