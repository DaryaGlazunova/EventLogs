import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../../hooks/use-theme";
import Search from "../search";
import { setOnlyUnread, setSearchValue } from "../../redux/filter/filterSlider";
import { RootState, useAppDispatch } from "../../redux/store";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Card } from "primereact/card";

import "./_index.scss";
import UnReadButton from "../only-unread-button";
import { useSelector } from "react-redux";

type ThemeItem = {
  code: string;
  name: string;
};

const Header: React.FC = () => {
  const [menuBurger, setMenuBurger] = useState(false);
  const [hiddenFiltersPopup, setHiddenFiltersPopup] = useState(true);
  const { windowWidth, breakPointMobile } = useSelector(
    (state: RootState) => state.window
  );
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

  const onClickBurgerMenu = () => {
    setMenuBurger(!menuBurger);
    setHiddenFiltersPopup(!hiddenFiltersPopup);
  };

  React.useEffect(() => {
    setTheme(selectedTheme.code);
  }, [selectedTheme]);

  const Filters = () => (
    <div className="header__filters-body">
      <div className="header__theme">
        <span>Тема:</span>
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
    </div>
  );

  return (
    <header className="header">
      <div className="header__container container">
        <div
          onClick={() => onClickBurgerMenu()}
          className="header__menu-burger"
        >
          {menuBurger ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        {windowWidth > breakPointMobile ? (
          <div className="header__filters">
            <Filters />
          </div>
        ) : (
          <div hidden={hiddenFiltersPopup} className="header__filters">
            <Card>
              <Filters />
            </Card>
          </div>
        )}

        <div className="header__search">
          <Search onClickSerachButton={onClickSerachButton} />
        </div>
      </div>
    </header>
  );
};

export default Header;
