import { Shipment } from './shipments/shipment';
export interface ShipmentInfo {
    shipmentId: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
}

export interface Shipper {
    getCost: (shipment: Shipment) => number;
}

export enum ShipmentType {
    LETTER = 'Letter',
    PACKAGE = 'Package',
    OVERSIZED = 'Oversized',
}
