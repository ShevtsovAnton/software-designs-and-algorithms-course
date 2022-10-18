import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
  private id: number;
  private value: number;
  private weight: number;
  private name: string;

  constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;
    id += 1;
    counter += 1;
  }
  public use(): void {}

  public compareTo(other: Item): number {
    if (this.getValue() > other.getValue()) {
      return 1;
    }
    if (this.getValue() < other.getValue()) {
      return -1;
    }
    if (this.getValue() === other.getValue()) {
      const name = this.getName().toLowerCase();
      const otherName = other.getName().toLowerCase();
      if (name > otherName) {
        return 1;
      }

      if (name < otherName) {
        return -1;
      }

      if (name === otherName) {
        return 0;
      }
    }
  }

  public toString(): string {
    return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): string {
    return this.weight;
  }

  public setValue(price: number): void {
    this.value = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  static reset(): void {
    counter = 0;
  }

  static numberOfItems(): number {
    return counter;
  }
}
