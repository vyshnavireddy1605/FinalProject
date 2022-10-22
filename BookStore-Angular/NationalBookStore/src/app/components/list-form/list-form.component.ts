import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from 'src/app/common/order-details';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
  lists:OrderDetails=new OrderDetails(8,"Gowtami",7899008654,"Java Programming language",130,"Phonepay",300);
  isEditable: boolean;
  orderdetails: OrderDetails;
  
  constructor(public listService:OrderDetailsService,public router:Router,public activateRoute :ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>
    this.getOrderDetailsById());
  
  }
  
onSubmit(): void 
{
  if(this.isEditable)
  {
    this.listService.updateOrderDetails(this.lists).subscribe(data=>
      this.router.navigateByUrl("/lists"));
  }
    
    else{
 console.log("hello") ;
 console.log(this.lists);
 this.listService.SaveOrderDetails(this.lists).
    subscribe((data: any)=>console.log(data));
    this.router.navigateByUrl("/list");

    }
}
getOrderDetailsById(){
  const listID = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
  
console.log(listID)
if(listID> 0){
  this.isEditable = true;
  this.listService.getOrderDetailsById(listID).subscribe(data=>{
    this.orderdetails = data;
    console.log(this.orderdetails)
  });
}

}
}
