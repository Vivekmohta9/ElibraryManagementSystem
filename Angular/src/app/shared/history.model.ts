export class History { //order history class
    OrderId: number;
    UserId: number;
    DocId: number;
    TimeStamp: Date;
}
export class Document { //document details class
    DocId: number;
    DocTitle: string;
    DocAuthors: string;
    DocPrice: number;
    DocDateOfPublished: Date;
    DocDescription: string;
    DocTypeId: number;
    DiscId: number;
}
export class Discipline { //discipline class
    DiscId: number;
    DiscName: string;
}
export class DocType { ////document type class
    DocTypeId: number;
    DocTypeName: string;
}

export class Elib { //user details class
    UserName: string;
    UserAddress: string;
    UserPhoneNumber: string;
    UserInterest: string;
    UserEmail: string;
    UserId: number;
    UserPassword: string;
    UserCreditCardNumber: string;
    UserCreditCardExpiryDate: string;
    UserCreditCardCVV: number;
    UserTypeId: number;
}
export class UserType{ //user type class
    UserTypeId: number;
    UserTypeName: string;
}
export class Login {
    UserEmail: String;
    UserPassword: String;
}