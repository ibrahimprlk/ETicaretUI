import { Component, OnInit } from '@angular/core';
import { Create_Product } from '../../../../Contracts/create_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { error } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  
  constructor(private productService:ProductService, private alertify:AlertifyService){}
  
  ngOnInit(): void {
  }

  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    const create_product:Create_Product= new Create_Product();
    create_product.name=name.value;
    create_product.stock=parseInt(stock.value);
    create_product.price=parseFloat(price.value);
    this.productService.create(create_product,(errorMessage: string)=>{ this.alertify.message(errorMessage,
      {
        position:Position.TopRight,
        messageType:MessageType.Error,
        
      }
    )
    });
  }

}
