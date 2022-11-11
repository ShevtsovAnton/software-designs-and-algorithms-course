import { Shipment } from './shipments/shipment';
export interface ShipmentInfo {
    shipmentId: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
    isFragile: boolean;
    doNotLeave: boolean;
    isReturnReceiptRequested: boolean;
}

export interface IShipment {
    getWeight: () => number;
    setWeight: (x: number) => void;
    getFromAddress: () => string;
    setFromAddress: (x: string) => void;
    getFromZipCode: () => string;
    setFromZipCode: (x: string) => void;
    getToAddress: () => string;
    setToAddress: (x: string) => void;
    getToZipCode: () => string;
    setToZipCode: (x: string) => void;
    getFragile: () => boolean;
    setFragile: (x: boolean) => void;
    getDoNotLeave: () => boolean;
    setDoNotLeave: (x: boolean) => void;
    getReturnReceiptRequested: () => boolean;
    setReturnReceiptRequested: (x: boolean) => void;
    getType: () => ShipmentType;
    ship: () => string;
}

export interface Shipper {
    getCost: (shipment: Shipment) => number;
}

export enum ShipmentType {
    LETTER = 'Letter',
    PACKAGE = 'Package',
    OVERSIZED = 'Oversized',
}
