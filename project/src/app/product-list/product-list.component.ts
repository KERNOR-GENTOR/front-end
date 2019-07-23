import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { events } from '../events';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  events = events;
  checkoutForm;//чи є сенс використовувати
  constructor(
    private router: Router,
    private formBuilder: FormBuilder){
      this.checkoutForm = this.formBuilder.group({
        name: '',
        price: '',
        details: ''
      });
  }
  private objectContains(obj: string, term: string): boolean {
    let amount:number = 0;
    for(let term_part of term.split(" ")){
      for (let description of obj.split(" ")){
        if(term_part === description) amount++;
      }
    }
    if(amount===term.split(" ").length) return true;
    return false;
  }
  onSubmit(customerData) {
    // Process checkout data here
    let filter = events;
    while(filter.length>0)
    {
      filter.pop();
    }
    for(let event of events)
    {
      if((this.objectContains(event.name,customerData.name)||customerData.name==='') &&
         (Math.abs(event.price-customerData.price)<=10||customerData.price==='') &&
         (this.objectContains(event.description,customerData.details)||customerData.details==='')
      ){
        filter.push(event);
      }
    }
  }
  open(id: number)
  {
    this.router.navigate(['/event/'+id]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/