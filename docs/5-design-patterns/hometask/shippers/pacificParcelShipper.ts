import { Shipment } from '../Shipment';
import { Shipper } from '../types';

export class PacificParcelShipper implements Shipper {
    private static rate = 0.51;

    public getCost(shipment: Shipment): number {
        return shipment.getWeight() * PacificParcelShipper.rate;
    }
}
