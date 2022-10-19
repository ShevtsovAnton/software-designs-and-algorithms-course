import { Item } from './Item';

export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled?: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled ?? false;
    this.consumed = false;
  }

  public use(): string {
    if (!this.consumed && !this.spoiled) {
      return this.eat();
    }
    return '';
  }

  public eat(): string {
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`;
    }
    this.setConsumed(true);
    return `You eat the ${this.getName}.${
      this.spoiled ? ' You feel sick.' : ''
    }`;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public toString(): string {
    return `Id: ${this.getId()} || ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
  }
}
