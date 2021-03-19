import { Roletype } from "../role/roletype.enum";

export interface IJwtPayload {
  id: number;
  username:string;
  email:string;
  roles:Roletype[],
  ias?:Date
}