import './index.css';

export const SearchInput = () => {
  return (
    <div className="d-flex search-input">
      <img src="./images/search-icon.svg" alt="" />
      <input type="text" placeholder="Rechercher dans Blocksto" />
    </div>
  );
};
