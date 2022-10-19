import { Item } from './Item';
export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE: number = 0.05;
  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.damageModifier = 0.05;
    this.baseDurability = baseDurability;
    this.durabilityModifier = 0.05;
  }
  public polish(): void {}

  public use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }
    this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;

    return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.${
      this.getDurability() <= 0 ? ` The ${this.getName()} breaks.` : ''
    }`;
  }

  public toString(): string {
    return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${
      100 * this.getDurability()
    }%`;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public setDurability(): void {
    this.baseDurability = this.baseDurability + this.durabilityModifier;
    if (this.baseDurability > 1) {
      this.baseDurability = 1;
    }
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  public setDamageModifier(value: number): void {
    this.damageModifier = value;
  }

  public getBaseDamage(): number {
    return this.baseDamage;
  }

  public setBaseDamage(value: number): void {
    this.baseDamage = value;
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public setDurabilityModifier(value: number): void {
    this.durabilityModifier = value;
  }

  public getBaseDurability(): number {
    return this.baseDurability;
  }
}
