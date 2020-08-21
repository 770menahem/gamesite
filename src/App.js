import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./component/Header";
import Hangman from "./hangman/Hangman";
import GameOfLife from "./game of life/GameOfLife";
import NotFound from "./component/notFound";
import Games from "./component/games";
import Weather from "./weather/Weather";
import "./App.css";
import Footer from "./component/Footer";
import Home from "./component/Home";
import News from "./component/News";

function App() {
  const [gamesCard, setGamesCard] = useState([
    { name: " ", img: " ", url: " " },
  ]);

  useEffect(() => {
    setGamesCard([
      {
        name: "Hangman",
        img:
          "data:image/png;base64,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",
        url: "/hangman",
      },
      {
        name: "Game of life",
        img:
          "https://www.researchgate.net/profile/Kuo-Chen_Chou/publication/51519427/figure/fig2/AS:601719025192961@1520472403348/Fig-5-Two-dimensional-cellular-automaton-Conways-game-of-life.png",
        url: "/gameOfLife",
      },
    ]);
  }, [setGamesCard]);

  return (
    <>
      <Header />
      <div className="game">
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/hangman" component={Hangman} />
          <Route path="/gameOfLife" component={GameOfLife} />
          <Route path="/weather" component={Weather} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/games" exact>
            <Games gamesCard={gamesCard} />
          </Route>
          <Route path="/" component={Home} />
          <Redirect to="/notFound" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
