import { Consumable } from './Consumable';
export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', numberOfSlices, 0, spoiled);
    this.slicesEaten = 0;
    this.numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return 'You eat a slice of pizza';
    } else {
      return '';
    }
  }
}
