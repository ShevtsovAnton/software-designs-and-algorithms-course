import { Client } from './Client';
import { item1, item2, item3 } from './mockData';

const client = new Client();

client.shipItem(item1);
client.shipItem(item2);
client.shipItem(item3);
