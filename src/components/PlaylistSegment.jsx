import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI";
const playlistUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

class PlaylistSegment extends React.Component {
  state = {
    playlist: [],
    selected: {
      isSelected: false,
      albumId: "",
    },
  };

  fetchPlaylist = async (query) => {
    try {
      let response = await fetch(playlistUrl + query, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      if (response.ok) {
        let playlistDetails = await response.json();
        console.log(playlistDetails.data);
        this.setState({
          playlist: playlistDetails.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    let query = this.props.playlist.toLowerCase().split(" ").join("+");
    this.fetchPlaylist(query);
  };

  render() {
    console.log();
    return (
      <>
        <Row>
          <h1 className="top-section-title-secondary">{this.props.playlist}</h1>
        </Row>
        <Row>
          {this.state.playlist.map((data) => (
            <Col md={3} lg={1} xs={6} key={data.id} className="mb-4">
              <div className="other-card">
                <div className="other-card-img">
                  <img src={data.album.cover_medium} alt="..." />
                </div>
                <div className="other-card-body">
                  <Link
                    className="other-card-title"
                    to={"/album/" + data.album.id}
                  >
                    {data.album.title}
                  </Link>
                  {/* <p className="other-card-text">
                    You'll find fiery, modern, groovy, jazz-Rock...
                  </p> */}
                  {/* <Button
                    className="movie-details-btn"
                    onClick={(e) => this.clickHandler(e, data.album.id)}
                  >
                    Check details!
                  </Button> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
export default PlaylistSegment;
