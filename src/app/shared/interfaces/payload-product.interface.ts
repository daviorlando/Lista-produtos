import { Product } from "./product.interface";
//import{user} from './user.interface';

export type ProductPayload = Omit<Product, 'id'>;