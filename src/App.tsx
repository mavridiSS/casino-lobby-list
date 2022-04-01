import React from "react";
import GamesList from "./components/GamesList";
import Header from "./components/Header";
import games from "./games";

function App() {
  const [filteredGames, setFilteredGames] = React.useState(games);
  const handleCategoryFilter = (category: string) => {
    const casinoGames =
      category === "All Games"
        ? games
        : games.filter((game) =>
            game.cats.find(({ title }) => title === category)
          );

    setFilteredGames(casinoGames);
  };

  const handleSearch = (term: string) => {
    setFilteredGames(
      games.filter((game) =>
        game.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header onCategoryFilter={handleCategoryFilter} onSearch={handleSearch} />
      <GamesList games={filteredGames} />
    </div>
  );
}

export default App;
