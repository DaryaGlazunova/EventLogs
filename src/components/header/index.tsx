import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../../hooks/use-theme";
import Search from "../search";
import { setOnlyUnread, setSearchValue } from "../../redux/filter/filterSlider";
import { RootState, useAppDispatch } from "../../redux/store";

import "./_index.scss";
import UnReadButton from "../only-unread-button";
import { useSelector } from "react-redux";

type ThemeItem = {
  code: string;
  name: string;
};

const Header: React.FC = () => {
  const themes = [
    { name: "Светлая", code: "light" },
    { name: "Темная", code: "dark" },
  ];
  const onlyUnread = useSelector((state: RootState) => state.filter.onlyUnread);

  const { theme, setTheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<ThemeItem>(
    themes.find((item: ThemeItem) => item.code === theme) || themes[0]
  );

  const dispatch = useAppDispatch();

  const onClickSerachButton = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const onClickUnReadButton = () => {
    dispatch(setOnlyUnread());
  };

  React.useEffect(() => {
    setTheme(selectedTheme.code);
  }, [selectedTheme]);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__theme">
          <span>тема:</span>
          <Dropdown
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.value)}
            options={themes}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
        <UnReadButton
          checked={onlyUnread}
          onClickUnReadButton={onClickUnReadButton}
        />
        <Search onClickSerachButton={onClickSerachButton} />
      </div>
    </header>
  );
};

export default Header;
