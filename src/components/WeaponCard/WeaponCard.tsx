import { IWeaponCard } from "../../types";
import "./weaponCard.css";

interface Props {
  weapon: IWeaponCard;
}

const WeaponCard = ({ weapon }: Props) => {
  return (
    <div className="weapon-card-wrapper">
      <p className="weapon-card-title">{weapon.name}</p>
      <img className="weapon-card-image" src="" />
      <p>DPS: {weapon.dps}</p>
    </div>
  );
};

export default WeaponCard;
