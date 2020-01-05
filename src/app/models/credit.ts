import { UserAccount } from './userAccount';
import { Account } from './account';

export class Credit {
    CreditId: Number;
    UserId: Number;
    AccountId: Number;
    Amount: Number;
    CreditDetail: String;
    UserRgistrer: String;
    CreditDate: Date;
    UserAccount: UserAccount;
    Account: Account;
}