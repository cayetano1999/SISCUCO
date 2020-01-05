import { UserAccount } from './userAccount';
import { Account } from './account';

export class Pay {
    PayId: Number;
    UserId: Number;
    AccountId: Number;
    PayDate: Date;
    Amount: Number;
    PayDetail: String;
    UserRegistrer: String;
    UserAccount: UserAccount;
    Account: Account;
}