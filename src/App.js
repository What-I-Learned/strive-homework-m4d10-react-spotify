import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* navigation */}
        <Sidebar />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route component={AlbumDetails} path="/album/:albumId" />
        {/* <Route component={ArtistDetails} path="/artist/:artistId" /> */}
        {/* music player */}
        {/* <Player/> */}
      </Router>
    </div>
  );
}

export default App;
