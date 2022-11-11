import { Shipment } from '../shipments/shipment';
import { Shipper, ShipmentType } from '../types';

export class ChicagoSprintShipper implements Shipper {
    private static letterRate = 0.42;
    private static packageRate = 0.2;

    public getCost(shipment: Shipment): number {
        const weight = shipment.getWeight();
        const type = shipment.getType();
        if (type === ShipmentType.LETTER) {
            return weight * ChicagoSprintShipper.letterRate;
        }
        return weight * ChicagoSprintShipper.packageRate;
    }
}
