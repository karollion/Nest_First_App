import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    return db.products.find((p) => p.id === id);
  }

  public deleteById(id: Product['id']): void {
    db.products = db.products.filter((p) => p.id !== id);
  }
}
