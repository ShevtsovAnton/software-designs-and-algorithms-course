import { Shipment } from './Shipment';
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
