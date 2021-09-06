import { useEffect, useState } from "react";
import { Alert, Container, Row, Col, Spinner } from "react-bootstrap";
import AlbumComments from "./AlbumComments";

const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI";

const AlbumDetails = ({ match }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(undefined);
  //   const [isLoading, setIsLoading] = useState(true);

  const fetchAlbum = async (query) => {
    try {
      let response = await fetch(albumUrl + query, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      if (response.ok) {
        let albumDetails = await response.json();
        console.log(albumDetails);
        setSelectedAlbum(albumDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(albumUrl + match.params.albumId);
    let query = match.params.albumId;
    fetchAlbum(query);
  }, []);

  return (
    <Container fluid>
      {selectedAlbum && (
        <section className="album-presentation">
          <Row className="album-presentation-top">
            <Col xs={12} md={2}>
              <div className="album-img">
                <img src={selectedAlbum.cover_medium} alt="" />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="album-info">
                <h2>{selectedAlbum.type}</h2>
                <h1>{selectedAlbum.title}</h1>
                <Row className="album-stats">
                  <Col xs={4}>{selectedAlbum.fans}</Col>
                  <Col xs={4}>{selectedAlbum.duration / 60}</Col>
                  <Col xs={4}>{selectedAlbum.nb_tracks}</Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className="album-presentation-bottom">
            <Col xs={7}>
              {selectedAlbum.tracks.data.map((track, index) => (
                <Row key={track.id}>
                  <Col xs={2}>{index + 1}</Col>
                  <Col xs={5}>{track.title}</Col>
                  <Col xs={3}>{track.rank}</Col>
                  <Col xs={2}>{track.duration}</Col>
                </Row>
              ))}
            </Col>
            <Col xs={5}>
              <h1>Comment Section</h1>
              <AlbumComments albumId={selectedAlbum.id} />
            </Col>
          </div>
        </section>
      )}
    </Container>
  );
};
export default AlbumDetails;
