import { ChangeEvent } from "react";
import { IWeaponInfo } from "../../listofWeapons";
import "./damageInput.css";

interface IDamangeInput {
  selectedWeapon: IWeaponInfo;
  handleDmgInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DamageInput = ({ selectedWeapon, handleDmgInput }: IDamangeInput) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor="damage-input">
        Enter the Damage:
      </label>
      <div className="input-wrapper">
        <input className="input" type="text" onChange={handleDmgInput} />
        <p className="helper-text">
          Combo length: {selectedWeapon.atkSpdPattern.length}
        </p>
      </div>
    </div>
  );
};

export default DamageInput;
