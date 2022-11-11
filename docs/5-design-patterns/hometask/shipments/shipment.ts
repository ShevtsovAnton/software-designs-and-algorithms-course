import { ShipmentInfo, Shipper, ShipmentType, IShipment } from '../types';
import { AirEastShipper } from '../shippers/airEastShipper';
import { ChicagoSprintShipper } from '../shippers/chicagoSprintShipper';
import { PacificParcelShipper } from '../shippers/pacificParcelShipper';

let shipmentId = 1;

export abstract class Shipment implements IShipment {
    private shipmentId: number;
    private weight: number;
    private cost: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;
    private shipper: Shipper;
    private isFragile: boolean;
    private doNotLeave: boolean;
    private isReturnReceiptRequested: boolean;
    protected type: ShipmentType;

    constructor({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
        isFragile,
        doNotLeave,
        isReturnReceiptRequested,
    }: ShipmentInfo) {
        this.shipmentId = shipmentId || Shipment.getShipmentId();
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
        this.type = ShipmentType.LETTER;
        this.isFragile = isFragile;
        this.doNotLeave = doNotLeave;
        this.isReturnReceiptRequested = isReturnReceiptRequested;
        this.postInitialize();
        this.shipper = Shipment.determineShipper(this.fromZipCode);
        this.cost = this.shipper.getCost(this);
    }

    private static getShipmentId(): number {
        const id = shipmentId;
        shipmentId += 1;
        return id;
    }

    private static determineShipper(fromZipCode: string): Shipper {
        switch (fromZipCode[0]) {
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintShipper();
            case '7':
            case '8':
            case '9':
                return new PacificParcelShipper();
            default:
                return new AirEastShipper();
        }
    }
    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
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

    public getType() {
        return this.type;
    }

    public getFragile(): boolean {
        return this.isFragile;
    }

    public setFragile(isFragile: boolean): void {
        this.isFragile = isFragile;
    }

    public getDoNotLeave(): boolean {
        return this.doNotLeave;
    }

    public setDoNotLeave(doNotLeave: boolean): void {
        this.doNotLeave = doNotLeave;
    }

    public getReturnReceiptRequested(): boolean {
        return this.isReturnReceiptRequested;
    }

    public setReturnReceiptRequested(isReturnReceiptRequested: boolean): void {
        this.isReturnReceiptRequested = isReturnReceiptRequested;
    }

    protected abstract postInitialize(): void;
}
