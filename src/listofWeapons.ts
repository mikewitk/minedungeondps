enum weaponTypes {
  MELEE = "MELEE",
  RANGED = "RANGED",
}

export interface IWeaponInfo {
  group: string;
  type: keyof typeof weaponTypes;
  atkSpdPattern: Array<number>;
}
export const weaponsInfo: Array<IWeaponInfo> = [
  { group: "anchor", type: weaponTypes.MELEE, atkSpdPattern: [2.5] },
  { group: "axe", type: weaponTypes.MELEE, atkSpdPattern: [0.5, 0.5, 0.8] },
  {
    group: "backstabber",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.5, 0.5, 0.8],
  },
  {
    group: "battleStaff",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.35, 0.35, 0.5, 0.65, 0.45, 0.45, 0.25, 0.3, 0.35, 1],
  },
  {
    group: "boneclub ",
    type: weaponTypes.MELEE,
    atkSpdPattern: [1.1, 0.8],
  },
  {
    group: "chainsword",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.2, 0.2],
  },
  {
    group: "claymore",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.7, 0.5, 0.8],
  },
  {
    group: "coralblade",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.18, 0.18, 0.54],
  },
  {
    group: "cutlass ",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.4, 0.4],
  },
  {
    group: "daggers",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.125, 0.125, 0.125, 0.125, 0.2, 0.2, 0.7],
  },
  {
    group: "double axe",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.6, 0.6],
  },
  {
    group: "gauntlets",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.125, 0.125, 0.125, 0.125, 0.2, 0.2, 0.7],
  },
  {
    group: "glaive",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.5, 0.6, 1],
  },
  {
    group: "hammer",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.7],
  },
  {
    group: "katana",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.48, 0.48, 0.6],
  },
  {
    group: "mace",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.44, 0.44, 0.77],
  },
  {
    group: "obsidian claymore",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.7, 1.2],
  },
  {
    group: "pickaxe",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.7],
  },
  {
    group: "rapier",
    type: weaponTypes.MELEE,
    atkSpdPattern: [
      0.12, 0.12, 0.12, 0.12, 0.12, 0.11, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
      1.1,
    ],
  },
  {
    group: "sickles",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.2, 0.2, 0.2, 0.2, 0.4, 0.5],
  },
  {
    group: "sinister sword",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.4, 0.4, 0.242],
  },
  {
    group: "soul knife",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.85],
  },
  {
    group: "soul scythe",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.48, 0.56],
  },
  {
    group: "spear",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.375, 0.375, 0.5],
  },
  {
    group: "sword",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.4, 0.4, 0.242],
  },
  {
    group: "tempest knife",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.251, 0.3, 0.5],
  },
  {
    group: "void touched blades",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.4, 0.4, 0.25, 0.7],
  },
  {
    group: "whip",
    type: weaponTypes.MELEE,
    atkSpdPattern: [0.8],
  },
];
