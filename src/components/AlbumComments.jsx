const commentUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI";

const AlbumComments = ({ albumId }) => {
  fetchAlbumComments = async () => {
    try {
      let response = await fetch();
    } catch (error) {
      console.log(error);
    }
  };

  return <div>this will be a comment section of: {albumId}</div>;
};

export default AlbumComments;
