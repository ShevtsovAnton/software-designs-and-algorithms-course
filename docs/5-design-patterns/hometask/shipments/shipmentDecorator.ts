import { IShipment, ShipmentType } from '../types';
import { Shipment } from './shipment';

export class ShipmentDecorator implements IShipment {
    private static fragileText = '**MARK FRAGILE**';
    private static doNotLeaveText = '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
    private static returnReceiptRequestedText = '**MARK RETURN RECEIPT REQUESTED**';

    protected wrappee: Shipment;

    constructor(shipment: Shipment) {
        this.wrappee = shipment;
    }

    public getWeight(): number {
        return this.wrappee.getWeight();
    }

    public setWeight(weight: number): void {
        return this.wrappee.setWeight(weight);
    }

    public getFromAddress(): string {
        return this.wrappee.getFromAddress();
    }

    public setFromAddress(address: string): void {
        return this.wrappee.setFromAddress(address);
    }

    public getFromZipCode(): string {
        return this.wrappee.getFromZipCode();
    }

    public setFromZipCode(zip: string): void {
        return this.wrappee.setFromZipCode(zip);
    }

    public getToAddress(): string {
        return this.wrappee.getToAddress();
    }

    public setToAddress(address: string): void {
        return this.wrappee.setToAddress(address);
    }

    public getToZipCode(): string {
        return this.wrappee.getToZipCode();
    }

    public setToZipCode(zip: string): void {
        return this.wrappee.setToZipCode(zip);
    }

    public getType(): ShipmentType {
        return this.wrappee.getType();
    }

    public getFragile(): boolean {
        return this.wrappee.getFragile();
    }

    public setFragile(isFragile: boolean): void {
        return this.wrappee.setFragile(isFragile);
    }

    public getDoNotLeave(): boolean {
        return this.wrappee.getDoNotLeave();
    }

    public setDoNotLeave(doNotLeave: boolean): void {
        return this.wrappee.setFragile(doNotLeave);
    }

    public getReturnReceiptRequested(): boolean {
        return this.wrappee.getReturnReceiptRequested();
    }

    public setReturnReceiptRequested(isReturnReceiptRequested: boolean): void {
        return this.wrappee.setReturnReceiptRequested(isReturnReceiptRequested);
    }

    public ship() {
        const isFragile = this.wrappee.getFragile();
        const doNotLeave = this.wrappee.getDoNotLeave();
        const isReturnReceiptRequested = this.wrappee.getReturnReceiptRequested();
        const fragileMark = isFragile ? `\n${ShipmentDecorator.fragileText}` : '';
        const doNotLeaveMark = doNotLeave ? `\n${ShipmentDecorator.doNotLeaveText}` : '';
        const isReturnReceiptRequestedMark = isReturnReceiptRequested ? `\n${ShipmentDecorator.returnReceiptRequestedText}` : '';
        return `${this.wrappee.ship()}${fragileMark}${doNotLeaveMark}${isReturnReceiptRequestedMark}`;
    }
}
