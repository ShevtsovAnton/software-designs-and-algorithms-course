import { ShipmentInfo } from './types';

let shipmentId = 1;

export class Shipment {
    private static rate = 0.39;

    private shipmentId: number;
    private weight: number;
    private cost: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;

    constructor({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
    }: ShipmentInfo) {
        this.shipmentId = shipmentId || Shipment.getShipmentId();
        this.weight = weight;
        this.cost = Shipment.getCost(weight);
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
    }

    private static getShipmentId(): number {
        const id = shipmentId;
        shipmentId += 1;
        return id;
    }

    private static getCost(weight: number): number {
        return +(weight * Shipment.rate).toFixed(2);
    }

    public getFromAddress(): string {
        return this.fromAddress;
    }

    public setFromAddress(address: string): void {
        this.fromAddress = address;
    }

    public getFromZipCode(): string {
        return this.fromZipCode;
    }

    public setFromZipCode(address: string): void {
        this.fromZipCode = address;
    }

    public getToAddress(): string {
        return this.toAddress;
    }

    public setToAddress(address: string): void {
        this.toAddress = address;
    }

    public getToZipCode(): string {
        return this.toZipCode;
    }

    public setToZipCode(zip: string): void {
        this.toZipCode = zip;
    }

    public ship(): string {
        return `Shipment with the ID ${this.shipmentId} will be picked up from ${this.fromAddress} ${this.fromZipCode} and shipped to ${this.toAddress} ${this.toZipCode}\nCost = ${this.cost}`;
    }
}
