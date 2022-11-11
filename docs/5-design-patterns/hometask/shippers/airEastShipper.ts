import { Shipment } from '../shipments/shipment';
import { Shipper, ShipmentType } from '../types';

export class AirEastShipper implements Shipper {
    private static letterRate = 0.39;
    private static packageRate = 0.25;
    private static oversizeSurcharge = 10;

    public getCost(shipment: Shipment): number {
        const weight = shipment.getWeight();

        switch (shipment.getType()) {
            case ShipmentType.PACKAGE:
                return weight * AirEastShipper.packageRate;
            case ShipmentType.OVERSIZED:
                return (
                    weight * AirEastShipper.packageRate +
                    AirEastShipper.oversizeSurcharge
                );
            default:
                return weight * AirEastShipper.letterRate;
        }
    }
}
