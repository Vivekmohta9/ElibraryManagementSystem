import { Injectable } from '@angular/core';
import { History, Discipline, DocType, Document , Elib, Login } from './history.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  readonly rootURL = 'https://localhost:44350/api'; //api url

  list: History[]; //used to store the array of order details
  docDetailsList: Document[]; //used to store the array of document details
  userDetails: Elib = { //used to store the user details
    UserName: '',
    UserAddress: '',
    UserPhoneNumber: '',
    UserInterest: '',
    UserEmail: '',
    UserId: 0,
    UserPassword: '',
    UserCreditCardNumber: '',
    UserCreditCardExpiryDate: '',
    UserCreditCardCVV: null,
    UserTypeId: null
  };

  selectedLogin: Login={
    UserEmail:'',
    UserPassword:''
  };

  readSession={
    UserId:0,
    UserTypeId:0
  };

  constructor(private http: HttpClient) {}

  // refreshList(){ //used to get the Order history 
  //   this.http.get(this.rootURL + '/Orders')
  //   .toPromise().then(res => this.list = res as History[]);
  // }
  getOrdersByUserId(UserId) //func used to get all documents details of specific discipline
  {
    return this.http.get(this.rootURL + '/Order_DetailsByUserId/' + UserId);
  }

  getAllDocumnents(): Observable<Document[]> //func used to get all documents
  {
    return this.http.get<Document[]>(this.rootURL + '/Document_Details');
  }


  getAllDisciplines(): Observable<Discipline[]> // func used to get all discipline
  {
    return this.http.get<Discipline[]>(this.rootURL + '/AllDisciplines');
  }


  getAllDoc_Types(): Observable<DocType[]> //func used to get all document Types(like freebie and Paid)
  {
    return this.http.get<DocType[]>(this.rootURL + '/AllDocument_Types');
  }

  
  getDocumentById(id: number): Observable<Document> //func used to get documents by its doc Id
  {
    return this.http.get<Document>(this.rootURL + '/Document_Details/' + id);
  }


  postDocument(document: Document): Observable<Document> //func used to post document data
  {
    return this.http.post<Document>(this.rootURL + '/Document_Details', document);
  }


  putDocument(document: Document): Observable<number> //func used to update the document data
  {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const options = {
      headers: httpHeaders
    };
    return this.http.put<number>(this.rootURL + '/Document_Details/' + document.DocId, document, options);
  }


  deleteDocumentById(id: number): Observable<number> //func used to delete particuler document detail 
  {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const options = {
      headers: httpHeaders
    };
    return this.http.delete<number>(this.rootURL + '/Document_Details/' + id);
  }


  getUserDetails(userId) //func used to get user Details as per its Id
  {
    this.http.get(this.rootURL + '/User_Details/' + userId)
    .toPromise().then(res => this.userDetails = res as Elib);
    return this.userDetails;
  }


  getDocument( discId) //func used to get all documents details of specific discipline
  {
    return this.http.get(this.rootURL + '/Document_DetailsByDiscId/' + discId);
  }


  postOrderData(OrderDetails: History) //func used to post Order details
  {
    this.http.post(this.rootURL + '/Orders', OrderDetails)
    .toPromise().then(res => this.list = res as History[]);
  }

  PostLoginUser(objLogin: Login) //func used to match Login details
  {
    return this.http.post(this.rootURL + '/Login', objLogin);
  }

  PostUserDetails(objUser: Elib) //func used to post User details
  {
    console.log(objUser);
    return this.http.post(this.rootURL + '/User_Details', objUser);
  }

  // PostLoginUser(objLogin: Login): Observable<Login> {
  //   console.log(objLogin);
  //   const httpHeaders = new HttpHeaders()
  //     .set('Content-Type', 'application/json');
  //   const options = {
  //     headers: httpHeaders
  //   };
  //   return this.http.post<Login>(this.rootURL + '/Login/' + objLogin, options);
  // }

}
