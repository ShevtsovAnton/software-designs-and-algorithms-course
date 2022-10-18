import { Weapon } from './Weapon';
export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('sword', value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const damageLimit = this.getBaseDamage() * 0.25;
    const damageModifier = this.getDamageModifier();

    if (damageModifier < damageLimit) {
      const damageModifierIncrease =
        damageModifier + Weapon.MODIFIER_CHANGE_RATE;
      this.setDamageModifier(
        damageModifierIncrease <= damageLimit
          ? damageModifierIncrease
          : damageLimit
      );
    }
  }
}
