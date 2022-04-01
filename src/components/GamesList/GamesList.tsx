import React from "react";
import { CasinoGame } from "../../types";
import GameTile from "../GameTile";
import styles from "./GamesList.module.css";

interface Props {
  games: CasinoGame[];
}

export default function GamesList({ games }: Props) {
  return (
    <div className={styles.container} data-testid="games-list">
      {games.map((game) => (
        <GameTile key={game.id} game={game} />
      ))}
    </div>
  );
}
