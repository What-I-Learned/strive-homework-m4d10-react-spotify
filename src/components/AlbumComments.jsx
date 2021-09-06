const commentUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI";

const AlbumComments = ({ albumId }) => {
  const fetchAlbumComments = async () => {
    try {
      let response = await fetch(commentUrl + { albumId }, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchAlbumComments();

  return <div>this will be a comment section of: {albumId}</div>;
};

export default AlbumComments;
