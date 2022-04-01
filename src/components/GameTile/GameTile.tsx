import React from "react";
import styles from "./GameTile.module.css";
import { CasinoGame } from "../../types";
import LazyImage from "../LazyImage";

interface Props {
  game: CasinoGame;
}

export default function GameTile({ game }: Props) {
  const [isImageLoaded, setIsImageLoaded] = React.useState(true);
  const handleImageError = () => setIsImageLoaded(false);

  //There are casino games images with are missing so we don't display them
  if (!isImageLoaded) return null;
  return (
    <div className={styles.container} data-testid="game">
      <LazyImage src={game.icon_2} alt={game.name} onError={handleImageError} />
      <div className={styles.overlay}>
        <h4 className={styles["game-name"]}>{game.name}</h4>
      </div>
    </div>
  );
}
