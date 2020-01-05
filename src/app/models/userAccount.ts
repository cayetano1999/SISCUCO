import { Account } from './account';
import { Rol } from './rol';
import { UserDetails } from './userDetails';

export class UserAccount {
    UserId: Number;
    UserName: String;
    Password: String;
    Estado: String;
    RolId:String;
    Account: Array<Account>;
    UserDetails: UserDetails;
    Rol: Rol
}