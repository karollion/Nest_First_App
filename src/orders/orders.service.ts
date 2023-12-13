import { Injectable } from '@nestjs/common';
import { db, Order } from './../db';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id: Order['id']): Order | null {
    return db.orders.find((p) => p.id === id);
  }
}
