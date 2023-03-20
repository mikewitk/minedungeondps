import { ChangeEvent } from "react";
import { weaponsInfo, IWeaponInfo } from "../../listofWeapons";
import "./weaponSelector.css";

interface IWeaponSelector {
  handleWeaponSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedWeapon: IWeaponInfo;
}

const WeaponSelector = ({
  handleWeaponSelect,
  selectedWeapon,
}: IWeaponSelector) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor="weapon-select">
        Select your Weapon:
      </label>
      <select
        className="selector"
        value={selectedWeapon.group}
        onChange={handleWeaponSelect}
        id="weapon-select"
      >
        {weaponsInfo.map((weaponInfo) => (
          <option value={weaponInfo.group}>
            {capitalize(weaponInfo.group)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeaponSelector;

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.substring(1);
}
