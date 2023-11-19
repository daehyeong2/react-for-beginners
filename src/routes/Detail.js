import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const {
      data: { movie: json },
    } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <span>Loading..</span>
      ) : (
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${movie.background_image})`,
              backgroundSize: "cover",
              padding: "60px 30px 20px 30px",
              width: "800px",
              height: "800px",
            }}
          >
            <a
              href="/react-for-beginners"
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
              }}
            >
              &larr; Back
            </a>
            <img
              alt={movie.title}
              style={{
                marginTop: "30px",
              }}
              src={movie.medium_cover_image}
            />
            <h1
              style={{
                color: "white",
              }}
            >
              {movie.title} ({movie.year})
            </h1>
            <span
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: "3px 5px",
                borderRadius: "3px",
              }}
            >
              Rating : {movie.rating} / 10
            </span>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                padding: "5px",
              }}
            >
              {movie.genres.map((g, index) => {
                return (
                  <li
                    style={{
                      marginRight: "20px",
                      color: "lightgrey",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                    key={index}
                  >
                    #{g}
                  </li>
                );
              })}
            </ul>
            {movie.yt_trailer_code ? (
              <a
                target="blank"
                style={{
                  color: "black",
                  backgroundColor: "lightskyblue",
                  borderRadius: "5px",
                  padding: "5px",
                  textDecoration: "none",
                  display: "block",
                  width: "100px",
                }}
                href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
              >
                Go To Trailer
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
