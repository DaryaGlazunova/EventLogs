import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./_index.scss";

interface SearchProps {
  onClickSerachButton: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onClickSerachButton }) => {
  const [searchValueLocal, setSearchValueLocal] = useState<string>("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const onChangeSearchValue = (value: string) => {
    setSearchValueLocal(value);
  };

  return (
    <div className="search">
      <InputText
        ref={searchInputRef}
        value={searchValueLocal}
        onChange={(event) => onChangeSearchValue(event.target.value)}
      />
      <Button
        onClick={() => onClickSerachButton(searchValueLocal)}
        label="Поиск"
      />
    </div>
  );
};

export default Search;
