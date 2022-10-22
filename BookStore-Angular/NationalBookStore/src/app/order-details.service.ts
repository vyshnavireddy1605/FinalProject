import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { OrderDetails } from './common/order-details';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService 
{
  private listURL="http://localhost:8080/api/list";

  private bookURL="http://localhost:8080/api/book";
  getOrderDetailsBycode: any;
  getAllOrderDetailsSearchByname: any;



  constructor(private httpClient:HttpClient) 
  {
  }
  getAllOrderDetails():Observable<OrderDetails[]>
  {
    return this.httpClient.get<getOrderDetailsResponse>(this.listURL).pipe(map(response=>response. _embedded.OrderDetails))

  }
  SaveOrderDetails(list:OrderDetails):Observable<OrderDetails>
  {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Access-control-Allow-Origin':'*'
      })
    };
  return this.httpClient.post<OrderDetails>(this.listURL,list,httpOptions);
    
  }
  getOrderDetailsById(listId : number):Observable<OrderDetails>
   {
    const listIDURl=this.listURL+"/"+listId;
   return this.httpClient.get<OrderDetails>(listIDURl);
   }

  updateOrderDetails(orderdetails:OrderDetails):Observable<OrderDetails>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.put<OrderDetails>(this.listURL+`/${orderdetails.id}`,orderdetails,httpOptions);
  }
  deleteOrderDetails(id:number){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.delete<OrderDetails>(this.listURL+`/${id}`,httpOptions);

  }

}

interface getOrderDetailsResponse
{
  _embedded:
  {
    OrderDetails:OrderDetails[]
  }

    
}
interface GetSearchByname{
  _embedded : {
    lists : OrderDetails[]
  }
}


