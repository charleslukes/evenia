import styles from "./styles.module.scss"
import {MagnifyingGlass} from "phosphor-react"

type searchType = {
  handleSearch: () => void
}

const Search = ({handleSearch}: searchType) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search Event" className={styles.searchInput} onChange={handleSearch} />
      <MagnifyingGlass className={styles.magnifyGlass} />
    </div>
  );
};

export default Search;
