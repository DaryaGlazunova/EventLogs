import React from "react";
import { ToggleButton } from "primereact/togglebutton";
import "./_index.scss";

interface unReadButtonProps {
  checked: boolean;
  onClickUnReadButton: () => void;
}

const UnReadButton: React.FC<unReadButtonProps> = ({
  checked,
  onClickUnReadButton,
}) => {
  return (
    <div className="only-unread-button">
      <p>Показать только непрочитанные</p>
      <ToggleButton
        checked={checked}
        onChange={onClickUnReadButton}
        className="w-8rem"
      />
    </div>
  );
};

export default UnReadButton;
