import React from "react";

import { Card } from "primereact/card";
import userImage from "../../assets/icons/userImage.png";
import "./_index.scss";

const CardItem: React.FC = () => {
  return (
    <Card className="card-item">
      <table>
        <tr>
          <th>Дата</th>
          <td>11.22.333</td>
        </tr>
        <tr>
          <th>Важность</th>
          <td>Высокая</td>
        </tr>
        <tr>
          <th>Оборудование</th>
          <td>Вегас</td>
        </tr>
        <tr>
          <th>Сообщение</th>
          <td>Сервер недоступен</td>
        </tr>
      </table>
    </Card>
  );
};

export default CardItem;
