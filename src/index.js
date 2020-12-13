import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import NowPlayingMoviePage from "./pages/NowPlayingMoviePage";
import FavoritePeoplePage from "./pages/favoritePeoplePage";
import PeoplePage from "./pages/peopleDetailsPage";
import MoviePeoplePage from "./pages/moviePeoplePage";
import RateMoviePage from "./pages/rateMoviePage";
import LoginPage from"./pages/loginPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddPeopleReviewPage from './pages/addPeopleReviewPage';


const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
          <PeopleContextProvider>
        <Switch>
        <Route exact path="/review/peopleform" component={AddPeopleReviewPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} /> 
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route exact path="/movies/nowplayingmovie" component={NowPlayingMoviePage} />
          <Route exact path="/people" component={MoviePeoplePage} />
          <Route exact path="/people/favoritePeople" component={FavoritePeoplePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/peoples/:id" component={PeoplePage} />
          <Route path="/movies/ratemovie/:id" component={RateMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </PeopleContextProvider>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));