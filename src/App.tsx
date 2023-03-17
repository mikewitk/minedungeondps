import { useState } from "react";
import "./App.css";
import { weaponsInfo, IWeaponInfo } from "./listofWeapons";

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState<IWeaponInfo>(
    weaponsInfo[0]
  );
  const [weaponDamage, setWeaponDmg] = useState<Array<string>>([]);
  const [weaponDps, setWeaponDps] = useState(0);
  const [saved, setSaved] = useState<Array<{ name: string; dps: number }>>([]);

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
      <h3>Minecraft Dungeons: DPS Calculator</h3>
      <div>
        <label htmlFor="weapon-select">Select your weapon:</label>
        <select
          value={selectedWeapon.group}
          onChange={handleWeaponSelect}
          id="weapon-select"
        >
          {weaponsInfo.map((weaponInfo) => (
            <option value={weaponInfo.group}>{weaponInfo.group}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="damage-input">Add dmg separated by comma</label>
        <p>Combo length: {selectedWeapon.atkSpdPattern.length}</p>
        <input type="text" onChange={handleDmgInput} />
      </div>
      <button onClick={calculateDps}>Calculate</button>
      <div>
        <h4>Your DPS is:</h4> <p>{weaponDps}</p>
      </div>
      <ul>
        {saved.map((weapon) => (
          <li>
            {weapon.name} : {weapon.dps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
