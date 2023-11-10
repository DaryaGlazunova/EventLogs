import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../../hooks/use-theme";
import Search from "../search";

import "./_index.scss";

type ThemeItem = {
  code: string;
  name: string;
};

const Header: React.FC = () => {
  const themes = [
    { name: "Светлая", code: "light" },
    { name: "Темная", code: "dark" },
  ];

  const { theme, setTheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<ThemeItem>(
    themes.find((item: ThemeItem) => item.code === theme) || themes[0]
  );

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
        <Search />
      </div>
    </header>
  );
};

export default Header;
