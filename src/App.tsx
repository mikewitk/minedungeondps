import { useState } from "react";
import "./App.css";
import DamageInput from "./components/DamageInput/DamageInput";
import Title from "./components/Title/Title";
import WeaponCard from "./components/WeaponCard/WeaponCard";
import WeaponSelector from "./components/WeaponSelector/WeaponSelector";
import { weaponsInfo, IWeaponInfo } from "./listofWeapons";
import { IWeaponCard } from "./types";

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState<IWeaponInfo>(
    weaponsInfo[0]
  );
  const [weaponDamage, setWeaponDmg] = useState<Array<string>>([]);
  const [weaponDps, setWeaponDps] = useState(0);
  const [saved, setSaved] = useState<Array<IWeaponCard>>([]);

  function handleWeaponSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const chosenWeapon = weaponsInfo.find(
      (weapon) => weapon.group === e.target.value
    );
    if (chosenWeapon) {
      setSelectedWeapon(chosenWeapon);
    }
  }

  function handleDmgInput(e: React.ChangeEvent<HTMLInputElement>) {
    const dmgArr = e.target.value.split(",");
    setWeaponDmg(dmgArr);
  }

  function calculateDps() {
    const totalDmg = weaponDamage.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      0
    );
    const totalComboDuration = selectedWeapon.atkSpdPattern.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const totalDps = parseInt((totalDmg / totalComboDuration).toFixed(0));
    setWeaponDps(totalDps);
    setSaved([...saved, { name: selectedWeapon.group, dps: totalDps }]);
  }

  return (
    <div className="App">
      <Title />
      <WeaponSelector
        handleWeaponSelect={handleWeaponSelect}
        selectedWeapon={selectedWeapon}
      />
      <DamageInput
        handleDmgInput={handleDmgInput}
        selectedWeapon={selectedWeapon}
      />
      <button onClick={calculateDps}>Calculate</button>
      <div>
        <h4>Armory:</h4>
      </div>
      <ul className="container">
        {saved.map((weapon) => (
          <li style={{ width: "fit-content" }}>
            <WeaponCard weapon={weapon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
