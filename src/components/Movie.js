import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie({
  background_image,
  medium_cover_image,
  title,
  year,
  genres,
  summary,
  id,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        marginBottom: "15px",
        padding: "10px",
      }}
    >
      <img alt={title} src={medium_cover_image} />
      <h2 style={{ color: "white", backgroundColor: "rgba(0,0,0,0.2)" }}>
        <Link
          to={`/movie/${id}`}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {title} ({year})
        </Link>
      </h2>
      <div>
        {genres.map((item) => {
          return (
            <li
              style={{
                color: "white",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
              key={item}
            >
              {item}{" "}
            </li>
          );
        })}
      </div>
      <p style={{ color: "white", backgroundColor: "rgba(0,0,0,0.2)" }}>
        {summary}
      </p>
    </div>
  );
}

Movie.propTypes = {
  background_image: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
