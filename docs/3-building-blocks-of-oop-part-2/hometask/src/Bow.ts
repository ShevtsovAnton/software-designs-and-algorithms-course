import { Weapon } from './Weapon';
export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('bow', value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const maxDurabilityModifier = 1 - this.getBaseDurability();
    const newDurabilityModifier =
      this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

    this.setDurabilityModifier(
      newDurabilityModifier < maxDurabilityModifier
        ? newDurabilityModifier
        : maxDurabilityModifier
    );
  }
}
