import { Card, ListGroup, Container } from "react-bootstrap";
import { useMovieData } from "../hooks/useMovieData";

const MovieData = () => {
  const { movieData } = useMovieData();
  // ["Crime", "Thriller", "romance"]
  // console.log(movieData.genres.map((genre) => genre.name).join(', '))
  return (
    <Container>
      <Card className="d-flex flex-row p-3 shadow h-100">
        <Card.Img
          variant="top"
          className="border rounded h-100 w-auto img-fluid"
          src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movieData.original_title}</Card.Title>
          <Card.Text>
            {movieData.overview}
          </Card.Text>

          <ListGroup>
            <ListGroup.Item>Genres: {movieData.genres &&
                movieData.genres.map((genre) => genre.name).join(", ")}</ListGroup.Item>
            <ListGroup.Item>Runtime: {movieData.runtime} minutes</ListGroup.Item>
            <ListGroup.Item>Release Date: {movieData.release_date}</ListGroup.Item>
            <ListGroup.Item>Popularity: {movieData.popularity}</ListGroup.Item>
          </ListGroup>

          <Card.Link className="btn btn-danger mt-3">Add to Watchlist</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieData;
