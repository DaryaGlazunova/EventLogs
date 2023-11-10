import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { setSearchValue } from "../../redux/filter/filterSlider";

import "./_index.scss";
import { useAppDispatch } from "../../redux/store";

const Search: React.FC = () => {
  const [searchValueLocal, setSearchValueLocal] = useState<string>("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const onClickSerachButton = () => {
    dispatch(setSearchValue(searchValueLocal));
  };

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
      <Button onClick={() => onClickSerachButton()} label="Поиск" />
    </div>
  );
};

export default Search;
