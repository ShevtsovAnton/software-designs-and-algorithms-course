import { ShipmentFactory } from './shipments/ShipmentFactory';
import { ShipmentInfo } from './types';

export class Client {
    shipItem(item: ShipmentInfo) {
        const shipment = ShipmentFactory.createShipment(item);
        const shipmentMessage = shipment.ship();
        console.log(shipmentMessage);
    }
}
