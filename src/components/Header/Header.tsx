import React, { ChangeEvent } from "react";
import Button from "../Button";
import styles from "./Header.module.css";

const categories = [
  "All Games",
  "Live Dealer",
  "Table Games",
  "Popular Games",
  "Video Slots",
  "Top Slots",
];

interface Props {
  onCategoryFilter: (category: string) => void;
  onSearch: (term: string) => void;
}

export default function Header({ onCategoryFilter, onSearch }: Props) {
  const [filter, setFilter] = React.useState("All Games");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleFilterClick = (category: string) => () => {
    setFilter(category);
    onCategoryFilter(category);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          {categories.map((category) => (
            <Button
              text={category}
              key={category}
              onClick={handleFilterClick(category)}
              active={category === filter}
            />
          ))}
        </div>
        <div>
          <input
            placeholder="Search"
            onChange={handleSearch}
            value={searchTerm}
            className={styles.search}
          />
        </div>
      </div>
    </header>
  );
}
