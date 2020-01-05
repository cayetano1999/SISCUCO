import { UserAccount } from './userAccount';
import { AccountType } from './accountType';

export class Account{
    AccountId: Number;
    UserId: Number;
    AccountName: String;
    AccountTypeId: String;
    Credit: Number;
    Limit: Number;
    Estado: String;
    DateToPay: Date;
    CreationDate: Date;
    Details: String;
    UserAccount: UserAccount;
    AccountType: AccountType;
}